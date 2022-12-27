// CATEGORIES TYPES

export type Categoriestype = {
    id: number;
    name: string;
    image: string
}

export type CatType = {
    error: string;
    result: Categoriestype[]
}

// PRODUCTS TYPES
export type ProductDataType = {
    id: number;
    id_cat: number;
    image: string;
    ingredients: string;
    name: string;
    points: number;
    price: number;
}

export type ProductType = {
    data: ProductDataType[];
    page: number;
    pages: number;
    total: number;
}

export type ProdsType = {
    error: string;
    result: ProductType;
}