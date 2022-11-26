import { useParams, useNavigate } from "react-router-dom";

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    const handleHomeButton = () => {
        navigate('/');
    }

    return (
        <div>
            Página sobre: {params.slug?.toUpperCase()} ({params.slug?.length})
            <br />
            <button onClick={handleBackButton} className='bg-green-600 p-2 mr-2 rounded-xl'>Voltar</button>
            <button onClick={handleHomeButton} className='bg-green-600 p-2 rounded-xl'>Home</button>
        </div>
    );
}