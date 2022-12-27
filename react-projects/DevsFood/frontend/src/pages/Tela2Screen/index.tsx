import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Title } from './styled';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setName } from '../../redux/reducers/userReducer';

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useAppSelector(state => state.user.name)

    let { nome } =  useParams();

    const handlerTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(event.target.value));
    }
    return (
        <Container>
            <Title>Tela2 de {nome}</Title>

            <input type="text" value={name} onChange={handlerTextChange} />

            <button onClick={() => navigate(-1)}>Voltar</button>
        </Container>
    )
}