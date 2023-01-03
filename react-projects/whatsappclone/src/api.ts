import firebaseConfig from './firebaseConfig';

import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, setDoc, getDoc, doc, query, where, getDocs, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';

import { DocumentData } from 'firebase/firestore';

const firebaseAppConfig = firebaseConfig();
const app = initializeApp(firebaseAppConfig);
const db = getFirestore(app);
const auth = getAuth(app);

type UserType = {
    id: string;
    name: string;
    avatar: string;
}

export default {
    fbPopup: async () => {
        const provider = new FacebookAuthProvider();
        let result = await signInWithPopup(auth, provider);
        return result;
    },
    addUser: async (u: UserType) => {
        await addDoc(collection(db, 'users'), {
            id: u.id,
            name: u.name,
            avatar: u.avatar,
        })
    },
    checkUser: async () => {
        const data = await getDocs(collection(db, 'users'));
        let idList: DocumentData[] = []
        data.forEach((doc) => {
            idList.push(doc.data());
        });
        
        return idList;
    },
    getContactList: async (userId: string) => {
        let list: UserType[] = [];

        let results = await getDocs(collection(db, 'users'));
        results.forEach(result => {
            let data = result.data();

            if (result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar,
                });
            }
        });

        return list;
    },
    addNewChat: async (user, user2) => {
        let newChat = await addDoc(collection(db, 'chats'), {
            messages: [],
            users: [user.id, user2.id],
        });

        updateDoc(doc(collection(db, 'users'), user.id), {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id,
            })
        });

        updateDoc(doc(collection(db, 'users'), user2.id), {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id,
            })
        });
    },
    onChatList: (userId, setChatList) => {
        return onSnapshot(doc(collection(db, 'users'), userId), (doc) => {
            if (doc.exists()) {
                let data = doc.data();
                if (data.chats) {
                    let chats = [...data.chats];

                    chats.sort((a, b) => {
                        if (a.lastMessageDate === undefined) {
                            return -1;
                        }
                        if (b.lastMessageDate === undefined) {
                            return -1;
                        }
                        if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
                            return 1
                        } else {
                            return -1;
                        }
                    })

                    setChatList(data.chats);
                }
            }
        });
    },
    onChatContent: (chatId, setList, setUsers) => {
        return onSnapshot(doc(collection(db, 'chats'), chatId), (doc) => {
            if (doc.exists()) {
                let data = doc.data();
                setList(data.messages);
                setUsers(data.users);
            }
        })
    },
    sendMessage: async (chatData, userId, type, body, users) => {
        let now = new Date();
        updateDoc(doc(collection(db, 'chats'), chatData.chatId), {
            messages: arrayUnion({
                type,
                author: userId,
                body,
                date: now,
            })
        });

        for (let i in users) {
            let u = await getDoc(doc(collection(db, 'users'), users[i]));
            let uData = u.data();
            if(uData.chats) {
                let chats = [...uData.chats];
                for (let e in chats) {
                    if (chats[e].chatId == chatData.chatId) {
                        chats[e].lastMessage = body;
                        chats[e].lastMessageDate = now;
                    }
                }

                await updateDoc(doc(collection(db, 'users'), users[i]), {
                    chats,
                })
            }
        }
    }
}