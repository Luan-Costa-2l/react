import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);

    return (
        <div>
            <h3>tela ShowData</h3>

            {state.user.name &&
                <>
                    Meu nome é: {state.user.name} <br />
                    Eu tenho: {state.user.age} anos
                </>
            }
            {!state.user.name && 'Não há informações sobre o usuário'}
            
            <br />
            <Link to='/'>Voltar</Link>
        </div>
    )
}