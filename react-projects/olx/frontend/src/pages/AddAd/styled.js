import styled from "styled-components";

export const PageArea = styled.div`

    form {
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
                
        .area {
            display: flex;
            align-items: center;
            max-width: 500px;
            padding: 10px;

            .area--title {
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area--input {
                flex: 1;

                input, select, textarea {
                    width: 100%;
                    outline: 0;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #CCC;
                    border-radius: 3px;
                    transition: all .5s ease;

                    &:focus {
                        border: 1px solid #555;
                        color: #555;
                    }
                }
                input[type=checkbox] {
                    width: auto;
                    cursor: pointer;
                }

                textarea {
                    height: 150px;
                    resize: none;
                }
            }

            button {
                background-color: #0089FF;
                border: 0;
                outiline: 0;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 14px;
                cursor: pointer;
                color: #FFF;
                font-weight: bold;

                &:hover {
                    background-color: #006FCE;
                }
            }
        }
    }

    @media(max-width: 600px) {

        form {
            
            .area {
                flex-direction: column;

                .area--title {
                    width: 100%;
                    text-align: left;
                    margin-bottom: 10px;
                }

                .area--input {
                    width: 100%;

                    button {
                        width: 100%;
                        padding: 10px;
                    }
                }
            }
        }
    }
`;