import { useState, useEffect } from "react";
import useApi from '../../helpers/OlxAPI';

import { ErrorMessage, PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea } from "./styled";
import { doLogin } from '../../helpers/AuthHandler';
import { AdItem } from '../../components/partials/AdItem'

export const MyAccount = () => {
    const api = useApi();

    // actualy user info
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [newName, setNewName] = useState('');
    const [newStateLoc, setNewStateLoc] = useState('');
    const [newEmail, setNewEmail] = useState('');

    // password info
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // api return info
    const [stateList, setStateList] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState([])
    

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getUserInfo = async () => {
            let userInfo = await api.getUser();
            console.log();
            setUser(userInfo.ads);
            setName(userInfo.name);
            setEmail(userInfo.email);
            setStateLoc(userInfo.state);
        }
        getUserInfo();
    }, [])


    const handlerSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(newPassword !== confirmPassword) {
            setError('Senhas não batem');
            setDisabled(false);
            return;
        }
        setStateLoc(newStateLoc);
        setPassword('clash')

        const json = await api.changeUserInfo(name, email, stateLoc, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/my-account';
        }

        setDisabled(false);
        setShowModal(false);
    }

    const handlerCancel = () => {
        setShowModal(false);
        setNewName(name);
        setNewStateLoc('');
        setNewEmail(email);
    }

    return (
        <PageContainer>
            <PageArea>
                <PageTitle>Minha conta</PageTitle>
                <div className="topSide">
                    <h3>Dados de usuário:</h3>
                    <div className="userData">
                        <div className="userArea">
                            <div className="userArea--title">Nome:</div>
                            <span>{name}</span>
                        </div>
                        <div className="userArea">
                            <div className="userArea--title">Email:</div>
                            <span>{email}</span>
                        </div>
                        <div className="userArea">
                            <div className="userArea--title">Estado:</div>
                            <span>{stateLoc}</span>
                        </div>
                        <div className="userArea">
                            <div className="userArea--title">Senha:</div>
                            <span className="password">........</span>
                        </div>
                        <div className="userArea">
                            <div className="userArea--title"></div>
                            <button onClick={() => setShowModal(!showModal)}>Alterar dados</button>
                        </div>
                    </div>
                </div>

                {showModal &&
                    <div className="bg">
                        <form onSubmit={handlerSubmit}>
                            <label className="area">
                                <div className="area--title">Nome Completo:</div>
                                <div className="area--input">
                                    <input
                                        type="text"
                                        disabled={disabled}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Estado</div>
                                <div className="area--input">
                                    <select value={newStateLoc} onChange={e=> setNewStateLoc(e.target.value)} required>
                                        <option></option>
                                        {stateList.map((item, index) => (
                                            <option key={index} value={item._id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">E-mail:</div>
                                <div className="area--input">
                                    <input
                                        type="email"
                                        disabled={disabled}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            {/* <label className="area">
                                <div className="area--title">Senha atual:</div>
                                <div className="area--input">
                                    <input
                                        type="password"
                                        disabled={disabled}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label> */}
                            <label className="area">
                                <div className="area--title">Nova senha:</div>
                                <div className="area--input">
                                    <input
                                        type="password"
                                        disabled={disabled}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <label className="area">
                                <div className="area--title">Confirmar nova senha:</div>
                                <div className="area--input">
                                    <input
                                        type="password"
                                        disabled={disabled}
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <div className="area">
                                <div className="area--title"></div>
                                <div className="area--input">
                                    <button disabled={disabled}>Confirmar alteração</button>
                                    <button className="cancel" disabled={disabled} onClick={handlerCancel}>Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                
                <div className="bottomSide">
                    {user && user.map((item, index) => (
                        <AdItem key={index} data={item} />
                    ))}
                </div>

                
            </PageArea>
        </PageContainer>
    );
}