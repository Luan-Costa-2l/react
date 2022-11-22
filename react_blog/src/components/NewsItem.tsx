import { News } from '../types/News';
type Props = {
    data: News;
}
export const NewsItem = ({ data }: Props) => {

    return (
        <section className='container'>
            <h3>{data.title}</h3>
            {data.image_url != null &&
                <div className='image'>
                    <img src={data.image_url} />
                </div>
            }
            {
                data.description.split('. ').map((p, i) => (
                    <p key={i}>{p}.</p>
                ))
            }
        </section>
    );
}