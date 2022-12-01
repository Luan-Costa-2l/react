import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Context } from '../contexts/Context';

export const SingUp = () => {
    const { name, age } = useContext(Context);

    return (
        <div>
            tela singUp de {name} que tem {age} anos
            <br />
            <Link to='/exibir'>Ir para ShowData</Link>
        </div>
    )
}