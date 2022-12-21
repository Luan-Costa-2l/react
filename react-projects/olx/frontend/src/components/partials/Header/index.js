import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { doLogout, isLogged } from '../../../helpers/AuthHandler'

export const Header = () => {
    let logged = isLogged();

    const handlerLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return (
        <HeaderArea>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <span className='logo-1'>O</span>
                        <span className='logo-2'>L</span>
                        <span className='logo-3'>X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to='/my-account'>Minha conta</Link>
                                </li>
                                <li>
                                    <button onClick={handlerLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to='/post-an-ad' className='button'>Poste um anúncio</Link>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                                <li>
                                    <Link to='/signin'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to='/signin' className='button'>Poste um anúncio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}