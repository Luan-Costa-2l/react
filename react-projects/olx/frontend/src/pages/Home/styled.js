import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox {
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
        display: flex;

        form {
            display: flex;
            flex: 1;
            height: 100%;

            input, select {
                height: 40px;
                border: 0;
                outline: 0;
                border-radius: 5px;
                font-size: 15px;
                color: #000;
                margin-right: 20px;
            }

            input {
                flex: 1;
                padding: 0 10px;
            }

            select {
                width: 100px;
            }

            button {
                background-color: #49AEEF;
                font-size: 15px;
                border: 0;
                outline: 0;
                border-radius: 5px;
                height: 40px;
                padding: 0px 20px;
                cursor: pointer;
                color: #FFF;

                &:hover {
                    background-color: #006FCE;
                }
            }
        }
    }

    .categoryList {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem {
            display: flex;
            align-items: center;
            color: #000;
            text-decoration: none;
            width: 25%;
            margin-bottom: 10px;
            height: 50px;

            &:hover {
                color: #999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
        }
    }

    @media(max-width: 600px) {
        & {

        }

        .searchBox form {
            flex-direction: column;

            input {
                padding: 10px;
                margin-right: 0;
                margin-bottom: 10px;
            }

            select {
                width: 100%;
                margin-bottom: 10px;
            }
        }

        .categoryList .categoryItem  {
            width: 50%;
            height: auto;
            flex-direction: column;
            align-items: center;

            img {
                margin-right: 0;
            }

            p {
                margin: 5px 0;
            }
        }
    }
`;

export const PageArea = styled.div`
    h2 {
        font-size: 20px;
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;

        .adItem {
            max-width: 25%;
        }
    }
    .seeAllLink {
        display: inline-block;
        color: #000;
        text-decoration: none;
        text-align: right;
        font-weight: bold;
        margin-top: 10px;
    }

    @media(max-width: 600px) {

        & {
            margin: 10px;
        }

        h2 {
            margin-left: 10px;
        }

        .list {
            .adItem {
                width: 100%;
                max-width: 50%;
            }
        }
    }
`;