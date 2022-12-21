import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <div>Página ABOUT</div>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
        </div>
    )
}