import styled from "styled-components";

export const PageArea = styled.div`

    .topSide {
        background-color: #FFF;
        border-radius: 5px;
        padding: 15px;
        box-shadow: 0px 0px 3px #999;

        h3 {
            margin: 0;
            margin-bottom: 10px;
        }

        .userData {
            width: 320px;

            .userArea{
                width: 100%;
                display: flex;
                align-items: center;
                padding: 5px;

                .userArea--title {
                    text-align: right;
                    min-width: 100px;
                    font-weight: bold;
                    margin-right: 5px;
                }

                span {
                    width: 100%;
                    height: 40px;
                    padding-left: 10px;
                    color: #555;
                    border: 1px solid #999;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;

                    &.password {
                        font-size: 20px;
                        font-weight: bold;
                        display: inline-block;
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
                    width: 100%;

                    &:hover {
                        background-color: #006FCE;
                    }
                }
            }
        }
    }

    .bg {
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    form {
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        padding-right: 300px;
                
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

                input {
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

                select {
                    outline: 0;
                    padding: 5px;
                    border: 1px solid #CCC;
                    border-radius: 3px;
                    cursor: pointer;
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

                &.cancel {
                    background-color: #FF0000;
                    margin-left: 5px;

                    &:hover {
                        background-color: #CE0000;
                    }
                }
            }
        }
    }
`;