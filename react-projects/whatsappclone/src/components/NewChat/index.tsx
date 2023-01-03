import { useState, useEffect } from 'react'
import './style.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../../api';

type UserType = {
    id: number;
    name: string;
    avatar: string;
}

type ChatListType = {
    chatId: number | undefined;
    title: string;
    image: string;
}

type Props = {
    chatList: ChatListType[];
    user: UserType;
    show: boolean;
    setShow: (parameter: boolean) => void;
}

export default ({ chatList, user, show, setShow }: Props) => {
    const [list, setList] = useState<UserType[]>([]);

    useEffect(() => {
        const getList = async () => {
            if(user !== null) {
                let results = await api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);

    const addNewChat = async (user2) => {
        await api.addNewChat(user, user2);

        setShow(false);
    }

    return (
        <div 
            className='newChat' 
            style={{left: show ? '0' : '-415px'}}
        >
            <div className="newChat--head">
                <div className="newChat--backButton" onClick={() => setShow(false)}>
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headTitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, index) => (
                    <div onClick={() => addNewChat(item)} className="newChat--item">
                        <img className='newChat--itemAvatar' src={item.avatar} alt="" key={index} />
                        <div className="newChat--itemName">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}