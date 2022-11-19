import styled from 'styled-components';

type ContainerProps = {
    bgColor: string;
}
export const Container = styled.div<ContainerProps>`
    max-width: 1140px;
    margin: auto;
    background-color: ${bgc => bgc.bgColor};
    color: #fff;
    padding: 20px;
    display: flex;

    span {
        font-wight: bold;
        font-size: 15px;
        color: #000;
    }

    .link {
        font-family: Arial, sans-serif;
        padding: 10px;

        &:hover {
            color: #f0f;
        }
    }

    @media (max-width: 900px) {
        background-color: green;
        flex-direction: column;

        .link {
            color: #FFF;
        }
    }
`;

type ButtonProps = {
    bg: string;
    small?: boolean;
}
export const Button = styled.button<ButtonProps>`
    font-size: ${(props) => props.small ? '15px' : '30px'};
    background-color:${props => props.bg};
    border-radius: 8px;
`;