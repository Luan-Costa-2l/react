import styled from "styled-components";

export const Item = styled.div`
    a {
        display: block;
        margin: 10px;
        border: 1px solid #CCC;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: #000;
        background-color: #FFF;

        

        .itemImage {
            transition: all .2s ease;
            &:hover {
                padding: 2px;
            }
        }

        .itemImage img {
            width: 100%;
            border-radius: 5px;
        }

        .itemName {
            color: #000;
            font-weight: bold;
        }
    }
`;