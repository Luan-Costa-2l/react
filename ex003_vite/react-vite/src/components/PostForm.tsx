import { useState } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({onAdd}: Props) => {
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(event.target.value);
    }
    const handleAddBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(event.target.value);
    }
    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert('Preencha os campos');
        }
    }

    return (
        <fieldset className="text-center border-2 mb-3 flex flex-col p-4 px-64">
            <legend className="font-bold">Adicionar Novo Post</legend>
            <input
            value={addTitleText}
            onChange={handleAddTitleChange}
            type="text"
            placeholder="Digite um título"
            required
            className="border-b-2 mb-2 outline-none" 
            />
            <textarea 
            value={addBodyText} 
            onChange={handleAddBodyChange} 
            name="body" 
            className="resize-none border-2 mb-2 outline-none"
            ></textarea>
            <button onClick={handleAddClick} className='bg-blue-700 rounded-xl text-white hover:opacity-90'>Adicionar Post</button>
        </fieldset>
    );
}