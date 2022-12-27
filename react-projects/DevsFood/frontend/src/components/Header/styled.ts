import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        cursor: pointer;

        &:focus {
            cursor: text;
        }
    }
`;

export const Logo = styled.img`
    width: auto;
    height: 70px;
`;

type Props = {
    active: boolean;
}

export const SearchInput = styled.input<Props>`
    border: 0;
    outline: 0;
    border-radius: 25px;
    width: ${Props => Props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    background-image: url('/src/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 12px center;
    padding-left: 50px;
    transition: all .1s ease;
    font-size: 15px;
`;