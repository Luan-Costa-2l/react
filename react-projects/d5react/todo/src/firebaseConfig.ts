// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';

import { Item } from "./types/Item";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwKtiGU4urK3Lj1BXLiVrFLxxxj-EX3s",
  authDomain: "todo-b992a.firebaseapp.com",
  projectId: "todo-b992a",
  storageBucket: "todo-b992a.appspot.com",
  messagingSenderId: "712967285701",
  appId: "1:712967285701:web:dbfb6919487c42d91b39ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const api = {
    addTask: async (id: number, name: string) => {
        await addDoc(collection(db, 'tasks'), {
            id,
            name,
            done: false,
        });
    },

    checkTasks: async (setList: (item: Item[]) => void) => {
        const tasks = await getDocs(collection(db, 'tasks'));
        let newList: Item[] = [];
        tasks.forEach((doc) => {
            newList.push(doc.data() as Item);
        });
        newList.sort((a, b) => a.id - b.id);
        setList(newList);
    },

    removeTask: async (id: number, setList: (item: Item[]) => void) => {
        const data = await  getDocs(collection(db, 'tasks'));
        let newList: Item[] = []
        data.forEach((docs) => {
            if (docs.data().id === id) {
                deleteDoc(doc(db, 'tasks', docs.id))
            }
            newList.push(docs.data() as Item);
        });
        setList(newList);
    },

    updateTask: async (id: number, done: boolean) => {
        const taskRef = await getDocs(collection(db, 'tasks'));

        taskRef.forEach(docs => {
            if (docs.data().id == id) {
                updateDoc(doc(db, 'tasks', docs.id), {
                    done: done,
                })
            }
        });
    }
}