import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            Página HOME - <Link to='/sobre' className='bg-green-400 rounded-xl p-2'>Ir para sobre</Link>
        </div>
    );
}