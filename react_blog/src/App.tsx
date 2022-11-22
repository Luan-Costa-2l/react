import { useCount } from "./components/hooks/count";

const App = () => {
  const [state, countDispatch] = useCount();
  return (
    <div>
      contagem: {state.count}
      <hr />
      <button className="rounded-xl text-white p-3 bg-blue-700 mr-3" onClick={()=>countDispatch({type: 'ADD'})}>Adicionar</button>
      <button className="rounded-xl text-white p-3 bg-gray-700 mr-3" onClick={()=>countDispatch({type: 'DEL'})}>Remover</button>
      <button className="rounded-xl text-white p-3 bg-red-700" onClick={()=>countDispatch({type: 'RESET'})}>Resetar</button>
    </div>
  );
}

export default App;