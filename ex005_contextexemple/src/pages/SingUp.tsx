import { Link } from 'react-router-dom';

import React, { useContext, useState } from 'react';
import { Context } from '../contexts/Context';

export const SingUp = () => {
    const { state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState(state.user.name);
    const [ageInput, setAgeInput] = useState<number>(state.user.age);

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput,
            }
        });
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: ageInput,
            }
        });
    }

    const handleNameChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(element.target.value);
    }
    const handleAgeChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(element.target.value));
    }

    return (
        <div>
            <h3>tela singUp (Thema: {state.theme.status})</h3>
            <input 
                type="text" 
                placeholder='Digite um nome' 
                value={nameInput} 
                onChange={handleNameChange}
            /> <br />
            <input 
                type="number" 
                placeholder='Digite uma idade' 
                value={ageInput} 
                onChange={handleAgeChange}
            /> <br />
            <Link to='/exibir'><button onClick={handleSave}>Mudar dados</button></Link>
            <br />
            <Link to='/exibir'>Ir para ShowData</Link>
        </div>
    )
}