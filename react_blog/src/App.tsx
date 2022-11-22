import React, { useState } from "react";
import { usePeopleList } from "./components/hooks/PeopleList";

const App = () => {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
    if(nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    };
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }
  const deletePerson = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: { id }
    });
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    });
  }

  return (
    <div className="p-5">
      <input className="border-2 border-gray-600 rounded-xl p-2" type="text" value={nameInput} onChange={handleInputChange} />
      <button className="bg-gray-600 rounded-xl p-2 text-white block mt-2" onClick={handleAddButton}>Adicionar</button>

      <hr />

      <button className="bg-blue-700 rounded-xl p-2 text-white block" onClick={handleOrderButton}>Ordenar</button>

      Lista de pessoas:
      <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button className="bg-red-600 p-1 rounded-xl text-white ml-1" onClick={() => deletePerson(item.id)}>[ Deletar ]</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;