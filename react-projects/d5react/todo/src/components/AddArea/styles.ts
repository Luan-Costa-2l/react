import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
        cursor: pointer;
    }

    input {
        flex: 1;
        border: 0;
        outline: 0;
        background-color: transparent;
        font-size: 18px;
        color: #FFF;
    }
`;