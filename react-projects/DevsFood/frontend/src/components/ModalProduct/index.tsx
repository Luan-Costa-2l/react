import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    Container,
    ProductArea,
    ProductButton,
    ProductButtons,
    ProductDetails,
    ProductInfoArea,
    ProductIngredients,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductQtImage,
    ProductQtText,
    ProductQuantity,
    ProductQuantityArea
} from "./styled";

import { ProductDataType } from "../../types";
import { setProducts } from "../../redux/reducers/cartReducer";

type DataType = {
    data: ProductDataType;
    setStatus: (parameter: boolean) => void;
}

export default ({ data, setStatus }: DataType) => {
    const dispatch = useDispatch();

    const [countQt, setCountQt] = useState<number>(1);

    useEffect(() => {
        setCountQt(1);
    }, [data]);

    const handleMinusQt = () => {
        if (countQt > 1) {
            setCountQt(countQt - 1);
        }
    }

    const handlePlusQt = () => {
        setCountQt(countQt + 1);
    }

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleAddToCart = () => {
        // juntar as informações
        // mandar isso pro reducer
        dispatch( setProducts({data, countQt}) )

        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} alt={data.name} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="src/assets/minus.png" />
                            <ProductQtText>{countQt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="src/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>{(data.price * countQt).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}