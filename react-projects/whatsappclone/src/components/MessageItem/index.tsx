import './style.css';

import { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';

type DataType = {
    body: string;
    author: number;
    date: Timestamp;
}
type UserType = {
    id: number;
    avatar: string;
    name: string;
}
type Props = {
    data: DataType;
    user: UserType;
}
export default ({ data, user }: Props) => {

    const [time, setTime] = useState('');

    useEffect(() => {
        if (data.date) {
            let d = new Date(data.date.seconds * 1000);
            let hours: number | string = d.getHours();
            let minutes: number | string = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div 
            className='messageLine' 
            style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}
        >
            <div 
                className="messageItem" 
                style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'}}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">{time}</div>
            </div>
        </div>
    )
}