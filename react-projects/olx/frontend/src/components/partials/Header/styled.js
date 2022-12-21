import styled from "styled-components";

export const HeaderArea = styled.header`
    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;

    .container {
        width: 100%;
        height: 100%;
        max-width: 1024px;
        margin: auto;
        display: flex;
        align-items: center;

        a { text-decoration: none; }        

        .logo {
            flex: 1;
            display: flex;
            align-items: center;

            .logo-1,
            .logo-2,
            .logo-3 {
                font-size: 27px;
                font-weight: bold;
            }

            .logo-1 { color: #F00; }
            .logo-2 { color: #0F0;margin-bottom: 20px; }
            .logo-3 { color: #00F; }
        }

        nav {
            padding: 10px 0;

            ul, li {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            ul {
                display: flex;
                align-items: center;
                height: 40px;
            }

            li {
                margin-right: 20px;
                margin-left: 20px;

                a, button {
                    border: 0;
                    background: 0;
                    color: #000;
                    font-size: 16px;
                    cursor: pointer;
                    outline: 0;

                    &:hover {
                        color: #999;
                    }

                    &.button {
                        background-color: #FF8100;
                        padding: 5px 10px;
                        border-radius: 8px;
                        color: #FFF;
                    }
                    &.button:hover {
                        background-color: #E57706;
                    }
                }
            }
        }
    }

    @media(max-width: 600px) {
        & {
            height: auto;
        }

        .container {
            flex-direction: column;

            .logo {
                margin: 10px 0;
            }

            nav ul {
                flex-direction: column;
                height: auto;
            }

            nav li {
                margin: 10px 0
            }
        }
    }
`;