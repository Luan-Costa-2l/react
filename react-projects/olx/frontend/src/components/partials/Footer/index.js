import Cookies from "js-cookie";
import React from "react";
import { FooterArea } from './styled';

export const Footer = () => {
    return (
        <FooterArea>
            <p>Projeto criado por <a href="https://www.linkedin.com/in/luan-cordeiro-575826254/" target="_blank">Luan C. Costa</a> durante o curso de reactJs do curso full stack da B7Web</p>
        </FooterArea>
    )
}