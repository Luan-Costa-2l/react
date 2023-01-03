import { useState, useEffect } from 'react';

import { Timestamp } from 'firebase/firestore';
import './style.css';

type ChatListType = {
    chatId: number | undefined;
    title: string;
    image: string;
    lastMessage: string;
    lastMessageDate: Timestamp;
}

interface Props {
    active: boolean;
    data: ChatListType;
    onclick: () => void;
}

export default ({ active, data, onclick }: Props) => {

    const [time, setTime] = useState('');

    useEffect(() => {
        if (data.lastMessageDate) {
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours: number | string = d.getHours();
            let minutes: number | string = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div className={active ? 'chatListItem active' : 'chatListItem'} onClick={onclick}>
            <img className='chatListItem--avatar' src={data.image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">{time}</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}