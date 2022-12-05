import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { Photos } from '../types/TypeList'

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [photo, setPhoto] = useState<Photos>({albumId: 0, id: 0, title: '', url: '', thumbnailUrl: ''});

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const response = await api.getPhoto(id);
        setPhoto(response);
        setLoading(false);
    }
    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button className='bg-gray-400 px-4 py-2 ml-4 rounded-xl mb-2' onClick={handleBackButton}>Voltar</button>
            {loading &&
                <p className="font-bold p-4 text-2xl">Carregando...</p>
            }
            {!loading &&
                <img src={photo.url} alt="" />
            }
        </div>
    );
}