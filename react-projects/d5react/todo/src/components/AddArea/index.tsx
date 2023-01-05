import { useState } from 'react';
import * as C from './styles';

import AddIcon from '@mui/icons-material/Add';

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState<string>('');

    const handleTask = () => {
        if (inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image' onClick={handleTask}>
                <AddIcon style={{color: '#999'}} />
            </div>
            <input 
                type="text" 
                placeholder='Adicione uma tarefa' 
                value={inputText} 
                onChange={e => setInputText(e.target.value)} 
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}