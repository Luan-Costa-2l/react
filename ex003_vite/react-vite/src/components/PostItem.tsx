import { PostsProps } from '../types/Posts';
type Props = {
    data: PostsProps;
}

export const PostItem = ({ data }: Props) => {

    return (
        <div className='text-center max-w-3xl mx-auto mb-8'>
            <h4 className="font-bold">{data.title}</h4>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
    );
}