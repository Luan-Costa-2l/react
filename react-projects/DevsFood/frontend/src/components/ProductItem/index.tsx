import { 
    Container, 
    ProductButton, 
    ProductButtonArea, 
    ProductInfoArea, 
    ProductIngredients, 
    ProductName, 
    ProductPhoto, 
    ProductPhotoArea, 
    ProductPrice 
} from "./styled";

import { ProductDataType } from '../../types';

type Props = {
    data: ProductDataType;
    key?: number;
    onClick: (data: ProductDataType) => void;
}

export default ({ data, onClick }: Props) => {

    const handleClick = () => {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} alt={data.name} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>{data.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="src/assets/next.png" alt="" />
            </ProductButtonArea>
        </Container>
    )
}