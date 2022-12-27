import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText,
    ProductIcon,
    ProductInfoArea,
    ProductItem,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductQuantityArea,
    ProductCountQtText
} from './styled';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { ProductType } from '../../types/cartTypes';
import { changeProduct } from '../../redux/reducers/cartReducer';

export default () => {
    const dispatch = useDispatch();
    const products = useAppSelector(state => state.cart.products as ProductType[]);

    const [show, setShow] = useState<boolean>(true);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key: number, type: string) => {
        dispatch(changeProduct({key, type}));
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/src/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="src/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={show}>
                {products.map((item, index) => (
                    <ProductItem key={index}>
                        <ProductPhoto src={item.image} />
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>{item.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</ProductPrice>
                        </ProductInfoArea>
                        <ProductQuantityArea>
                            <ProductIcon src='src/assets/minus.png' onClick={() => handleProductChange(index, '-')} />
                            <ProductCountQtText>{item.countQt}</ProductCountQtText>
                            <ProductIcon src='src/assets/plus.png' onClick={() => handleProductChange(index, '+')} />
                        </ProductQuantityArea>
                    </ProductItem>
                ))}
            </CartBody>
        </CartArea>
    );
};