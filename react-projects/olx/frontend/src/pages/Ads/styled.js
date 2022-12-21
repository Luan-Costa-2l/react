import styled from "styled-components";


export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .leftSide {
        width: 250px;
        margin-right: 10px;

        .filterName {
            font-size: 15px;
            margin: 10px 0 5px 0;
        }

        input, select {
            width: 100%;
            height: 40px;
            border: 2px solid #9BB83C;
            border-radius: 5px;
            font-size: 15px;
            outline: 0;
            color: #000;
            padding: 10px;
        }

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            color: #000;
            cursor: pointer;
            transition: all .1s ease;

            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }

            span {
                font-size: 14px;
            }
        }

        .categoryItem:hover,
        .categoryItem:active,
        .active {
            background-color: #9BB83C;
            color: #FFF;
        }
    }

    .rightSide {
        flex: 1;

        h2 {
            margin-top: 0;
            margin-left: 10px;
            font-size: 18px;
        }

        .listWarning {
            margin-left: 10px;
            padding: 30px;
            text-align: center;
            font-size: 20px;
        }

        .list {
            display: flex;
            flex-wrap: wrap;

            .adItem {
                width: 33%;
            }
        }

        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;

            .pagItem {
                width: 30px;
                height: 30px;
                border: 1px solid #000;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                margin-right: 5px;
                cursor: pointer;

                &:last-child {
                    margin-right: 0;
                }
                &:hover {
                    border-color: #999;
                }
                &.active {
                    background-color: #CCC;
                }
            }
        }
    }

    @media(max-width: 600px) {
        flex-direction: column;

        .leftSide {
            width: auto;
            margin-right: 0;
            padding:  20px;

            ul {
                display: flex;
                flex-wrap: wrap;

                .categoryItem {
                    width: 50%;
                }
            }
        }

        .rightSide {
            margin: 10px;

            .list {

                .adItem {
                    width: 50%;
                }
            }
        }
    }
`;