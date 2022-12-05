import { api } from "../api";
import { useState, useEffect } from "react";
import { Albums } from '../types/TypeList'
import { Link } from 'react-router-dom';


export const Home = () => {
    const [Albums, setAlbums] = useState<Albums[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadAlbums();
    }, [])

    const loadAlbums = async () => {
        setLoading(true);
        let json = await api.getAllAlbums();
        setAlbums(json);
        setLoading(false);
    }

    return (
        <>
            {loading &&
                <p className="font-bold p-4 text-2xl">Carregando...</p>
            }
            <ul>
                {Albums.map((item, index) => (
                    <li key={index} className='border-4 border-black m-2 cursor-pointer hover:bg-gray-400'>
                        <Link to={`/galery/${item.id}`} className='block w-full p-4'>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>

    );
}