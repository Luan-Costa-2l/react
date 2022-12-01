import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';

export const ShowData = () => {
    const data = useContext(Context);

    return (
        <div>
            tela ShowData de {data.name}
            <br />
            <Link to='/'>Voltar</Link>
        </div>
    )
}