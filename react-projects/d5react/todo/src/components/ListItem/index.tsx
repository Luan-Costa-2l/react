import { Item } from '../../types/Item';
import * as C from './styles';

import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    item: Item;
    onChecked: (id: number, done: boolean) => void;
    deleteTask: (id: number) => void;
}

export const ListItem = ({ item, onChecked, deleteTask }: Props) => {
    // Ps: adicionar funcionalidade ao Delete icon, e concertar a organização da lista dps de deletar um item

    const handleToggleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChecked(item.id, e.target.checked);
    }

    return (
        <C.Container done={item.done}>
            <input 
                type={'checkbox'} 
                checked={item.done} 
                onChange={handleToggleChecked}
            />
            <label>{item.name} - {item.done.toString()}</label>
            <div className="deleteIcon" onClick={() =>deleteTask(item.id)}>
                <DeleteIcon style={{color: '#CCC'}} />
            </div>
        </C.Container>
    );
}