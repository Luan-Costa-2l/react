import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    background-color: #136713;
`;

export const PageBody = styled.div`
    display: flex;
    flex: 1;
    background-color: #00980d;
    background-image: url('/src/assets/bg.png');
    overflow-y: auto;
`;