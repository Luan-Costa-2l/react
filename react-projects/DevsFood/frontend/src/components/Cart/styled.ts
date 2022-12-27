import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0 10px;
`;

export const CartText = styled.p`
    color: #FFF;
    font-size: 17px;
    flex: 1;
`;


type Props = {
    show: boolean;
}

export const CartBody = styled.div<Props>`
    display: ${props => props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

export const ProductCountQtText = styled.div`
    font-size:  13px;
    font-weight: bold;
    margin: 0 5px;
`;