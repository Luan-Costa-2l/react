import { Container, CategoryImage } from "./styled";
import { Categoriestype } from "../../types";

import React from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


type Props = {
    data: Categoriestype;
    key?: number;
    activeCategory: number;
    setActiveCategory: (id: number) => void;
}

export default ({ data, activeCategory, setActiveCategory }: Props) => {

    const handleCategoryClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setActiveCategory(data.id);
    }

    return (
        <>
            <Container id={(data.id + 4).toString()} active={activeCategory} newId={data.id} onClick={handleCategoryClick}>
                <CategoryImage src={data.image} alt="" />
            </Container>
            <Tooltip anchorId={(data.id + 4).toString()} content={data.name} place="top" />
        </>

    );
}