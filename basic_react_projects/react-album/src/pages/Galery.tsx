import { api } from '../api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Photos, Albums } from '../types/TypeList';
import { Link } from 'react-router-dom';

export const Galery = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [photos, setPhotos] = useState<Photos[]>([]);
    const [album, setAlbum] = useState<Albums>({userId: 0, id: 0, title: ''});
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbum(params.id);
        }
    }, []);

    const loadAlbum  = async (id: string) => {
        let json = await api.getAlbum(id);
        setAlbum(json);
    }
    const loadPhotos = async (id: string) => {
        setLoading(true);
        let json = await api.getAllPhotos(id);
        setPhotos(json);
        setLoading(false);
    }
    const handleBackButton = () => {
        navigate(-1);
    }
    
    return (
        <div className='w-full'>
            <button className='bg-gray-400 px-4 py-2 ml-4 rounded-xl' onClick={handleBackButton}>Voltar</button>

            <h2 className='font-bold text-3xl p-4'>{album.title}</h2>

            {loading && 
                <p className='font-bold text-2xl p-4'>Carregando...</p>
            }

            {!loading && 
                <div className='grid grid-cols-7 gap-6 w-fit mx-auto my-4'>
                    {photos.map((item, index) => (
                        <Link to={`/photos/${item.id}`}>
                            <div key={index} className='border-2 border-black p-4 cursor-pointer hover:opacity-70'>
                                <img src={item.thumbnailUrl} alt="" />
                            </div>
                        </Link>
                        
                    ))}
                </div>
            }
        </div>
    );
}