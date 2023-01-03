import { useState, useEffect } from 'react';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import './App.css';
import Login from './components/Login';

import api from './api';

type ChatListType = {
    chatId: number | undefined;
    title: string;
    image: string;
}
type UserType = {
    id: number;
    name: string;
    avatar: string;
}
type user = {
    user: UserType | null;
}


const App = () => {

    const [chatList, setChatList] = useState<ChatListType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatListType>({chatId: undefined, title: '', image: ''});
    const [user, setUser] = useState({
        id: 'UoZ6FijnHtdKeO77HMRM',
        name: 'Luan Costa',
        avatar: 'https://graph.facebook.com/1584754295372323/picture'
    });
    const [showNewChat, setShowNewChat] = useState<boolean>(false);

    useEffect(() => {
        if (user !== null) {
            let unsub = api.onChatList(user.id, setChatList);
            return unsub;
        }
    }, [user])

    const handleLoginData = async (user) => {
        let newUser = {
            id: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
        };

        let idList = await api.checkUser();
        let a = idList.filter(item => item.id === newUser.id);
        if (a.length < 1) {
            await api.addUser(newUser);
        }
        
        setUser(newUser);
    }

    if(user === null) {
        return (<Login onReceive={handleLoginData} />);
    }

    return (
        <div className="app-window">
            <div className="sideBar">
                <NewChat 
                    chatList={chatList} 
                    user={user}
                    show={showNewChat} 
                    setShow={setShowNewChat} 
                />
                <header>
                    <img className='header--avatar' src={user.avatar} alt="" />
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn" onClick={() => setShowNewChat(true)}>
                        <ChatIcon  style={{color: '#919191'}} />
                        </div>
                        <div className="header--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize='small' style={{color: '#919191'}} />
                        <input type="search" name="search" placeholder='Procurar ou começar uma nova conversa.' />
                    </div>
                </div>

                <div className="chatlist">
                    {chatList.map((item, index) => (
                        <ChatListItem
                            key={index} 
                            data={item}
                            active={activeChat.chatId === item.chatId} 
                            onclick={() => setActiveChat(item)}
                        />
                    ))}
                </div>

            </div>
            <div className="contentArea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow
                        user={user} 
                        data={activeChat}
                    />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
                
            </div>
        </div>
    )
}

// site icones: https://mui.com/core/
export default App;