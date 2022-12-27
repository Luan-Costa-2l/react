import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem,
} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

import { Categoriestype, CatType, ProductDataType, ProdsType } from '../../types';

let searchTimer: undefined | number = undefined;

export default () => {
    const navigate = useNavigate();
    const [headerSearch, setHeaderSearch] = useState<string>('');
    const [categories, setCategories] = useState<Categoriestype[]>([]);
    const [products, setProducts] = useState<ProductDataType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const [modalStatus, setModalStatus] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ProductDataType>({id: 0, id_cat: 0, image: '', ingredients: '', name: '', points: 0, price: 0});

    const [activeCategory, setActiveCategory] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const [activeSearch, setActiveSearch] = useState<string>('');

    const getProducts = async () => {
        const prods: ProdsType = await api.getProducts(activeCategory, activePage, activeSearch);
        if (prods.error == '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    useEffect(() => {
        const getCategories = async () => {
            const cat: CatType = await api.getCategories();
            if (cat.error == '') {
                setCategories(cat.result);
            }
        }
        getCategories();
    }, []);

    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data: ProductDataType) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma Categoria
                    <CategoryList>
                        <CategoryItem setActiveCategory={setActiveCategory} activeCategory={activeCategory}
                            data={{ id: 0, name: "Todas as categorias", image: "/src/assets/food-and-restaurant.png" }} />
                        {categories.map((item, index) => (
                            <CategoryItem setActiveCategory={setActiveCategory} key={index} activeCategory={activeCategory} data={item} />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }

            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem key={index} data={item} onClick={handleProductClick} />
                        ))}
                    </ProductList>
                </ProductArea>
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index) => (
                        <ProductPaginationItem 
                            key={index} 
                            active={activePage} 
                            current={index + 1} 
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>
        </Container>
    )
}