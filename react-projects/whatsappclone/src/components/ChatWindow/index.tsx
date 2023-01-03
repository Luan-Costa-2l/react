import { useState, useEffect, useRef } from 'react';
import './style.css';

import EmojiPiker from 'emoji-picker-react';
import { EmojiStyle } from 'emoji-picker-react';
import { EmojiClickData } from 'emoji-picker-react';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import MessageItem from '../MessageItem';
import { Timestamp } from 'firebase/firestore';
import api from '../../api';

type DataType = {
    chatId: number | undefined | string;
    title: string;
    image: string;
    lastMessage: string;
    lastMessageDate: Timestamp;
}

type UserType = {
    id: number;
    avatar: string;
    name: string;
}
type Props = {
    user: UserType;
    data: DataType;
}

export default ({ user, data }: Props) => {

    const body = useRef<HTMLDivElement>(document.createElement('div'));
    // let recognition = null;
    // let SpeechRecognition = window.SpeechRecognitionResult;
    // if (SpeechRecognition !== undefined) {
    //     recognition = new SpeechRecognition();
    // }

    const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [listening, setListening] = useState<boolean>(false);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setList([]);
        let unsub = api.onChatContent(data.chatId, setList, setUsers);
        return unsub;
    }, [data.chatId])

    useEffect(() => {
        if (body.current !== null) {
            if (body.current.scrollHeight > body.current.offsetHeight) {
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
            }
        }
        
    }, [list])

    const handleEmojiClick = (e: EmojiClickData) => {
        setText(text + e.emoji);
    }

    const handleMicClick = () => {
        setListening(!listening);
    }

    const handleInputKeyUp = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            handleSendClick();
        }
    }

    const handleSendClick = () => {
        if (text !== '') {
            api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img className="chatWindow--avatar" src={data.image} alt="" />
                    <div className="chatWindow--name">{data.title}</div>
                </div>
                <div className="chatWindow--headerButtons">
                    <div className="headerWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="headerWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="headerWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </div>

            <div ref={body} className="chatWindow--body">
                {list.map((item, index) => (
                    <MessageItem 
                        key={index} 
                        data={item} 
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiArea" style={{height: emojiOpen ? '200px' : '0'}}>
                <EmojiPiker 
                    onEmojiClick={handleEmojiClick} 
                    width='100%' 
                    searchDisabled 
                    skinTonesDisabled 
                    previewConfig={{showPreview: false}}
                    emojiStyle={EmojiStyle.APPLE} 
                />
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div 
                        className="headerWindow--btn"
                        onClick={() => setEmojiOpen(false)} 
                        style={{width: emojiOpen ? '40px' : '0'}}
                    >
                        <CloseIcon style={{color: '#919191'}} />
                    </div>
                    <div 
                        className="headerWindow--btn" 
                        onClick={() => setEmojiOpen(true)}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>
                <div className="chatWindow--inputArea">
                    <input 
                        className='chatWindow--input' 
                        type="text" 
                        placeholder='Digite uma mensagem' 
                        value={text}
                        onChange={e => setText(e.target.value)} 
                        onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow--pos">
                    {!text &&
                        <div onClick={handleMicClick} className="headerWindow--btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {text &&
                        <div onClick={handleSendClick} className="headerWindow--btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}