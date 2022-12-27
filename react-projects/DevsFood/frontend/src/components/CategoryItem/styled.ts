import styled from "styled-components";

type Props = {
    id: string;
    active: number;
    newId: number;
}

export const Container = styled.div<Props>`
    width: 80px;
    height: 80px;
    background-color: ${Props=>Props.active == Props.newId ? '#FFF' : '#AAE09A'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
    transition: all .2s ease;

    &:last-child {
        margin-right: 0;
    }
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;