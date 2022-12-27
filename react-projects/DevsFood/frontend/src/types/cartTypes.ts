import { ProductDataType } from "./";

// setProducts
export type PayloadType = {
    data: ProductDataType;
    countQt: number;
}

export type ActionType = {
    payload: PayloadType;
    type: string;
}

export interface ProductType extends ProductDataType {
    countQt: number;
}

export interface StateType {
    products: ProductType[];
    address: never[];
    discount: number;
    delivery: number
}