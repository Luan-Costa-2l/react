import styled from "styled-components";

export const FooterArea = styled.footer`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-size: 14px;
    border-top: 1px solid #999;
    margin-top: 20px;

    a {
        text-decoration: none;
        color: #777;

        &:hover {
            color: #333;
        }
    }
`;