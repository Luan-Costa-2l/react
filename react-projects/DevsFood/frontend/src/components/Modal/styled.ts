import styled from "styled-components";

type ContainerProps = {
    status: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${props => props.status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalBody = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-width: 100vw;
    max-height: 95vh;
    overflow: auto;
`;
