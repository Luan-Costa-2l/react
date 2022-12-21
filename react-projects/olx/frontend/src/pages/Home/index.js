import React, { useState, useEffect } from "react";
import { PageArea, SearchArea } from "./styled";
import useApi from '../../helpers/OlxAPI';
import { AdItem } from "../../components/partials/AdItem";

import { PageContainer } from "../../components/MainComponents";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads)
        }
        getRecentAds();
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form action="/ads" method="get">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((item, index) => (
                            <Link key={index} to={`/ads?cat=${item.slug}`} className="categoryItem">
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((item, index) => (
                            <AdItem key={index} data={item} />
                        ))}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver Todos</Link>

                    <hr />

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga harum sapiente? Nisi ad asperiores itaque dolor maxime omnis accusamus illum quo expedita sunt distinctio magnam labore vel, at alias?
                </PageArea>
            </PageContainer>
        </>
        

    )
}