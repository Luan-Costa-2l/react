import React from "react";
import { Link } from "react-router-dom";
import { Item } from './styled';

export const AdItem = (props) => {
    // let price = !props.data.priceNegotiable ? `R$ ${props.data.price}` : 'Negociável';
    const convertPrice = (value) => {
        if (props.data.priceNegotiable) {
            return 'Preço Negociável'
        } else {
            return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        }
    }

    let price = convertPrice(props.data.price)
    return (
        <>
            {/* {!props.data.image.includes('default') && */}
                <Item className="adItem">
                    <Link to={`/ads/${props.data.id}`}>
                        <div className="itemImage">
                            <img src={props.data.image} alt="" />
                        </div>
                        <div className="itemName">{props.data.title}</div>
                        <div className="itemPrice">{price}</div>
                    </Link>
                </Item>
            {/* } */}
        </>
    );
}