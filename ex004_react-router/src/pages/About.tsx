import { Link, useSearchParams } from "react-router-dom";
export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return (
        <div>
            Filto: {searchParams.get('filter')}
            <br />
            Order: {searchParams.get('order')}
            <hr />
            <button onClick={()=>setOrder('asc')}>Asc</button>
            <button onClick={()=>setOrder('desc')}>Desc</button>
            <hr />
            Página sobre:
            <ul>
                <li><Link to='/sobre/luan'>Luan</Link></li>
                <li><Link to='/sobre/bonieky'>Bonieky</Link></li>
            </ul>
        </div>
    );
}