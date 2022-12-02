import { Routes, Route } from 'react-router-dom';

import { ShowData } from './pages/ShowData';
import { SingUp } from './pages/SingUp';

import { Context } from './contexts/Context';
import { useContext } from 'react';

const App = () => {
    const { state, dispatch } = useContext(Context);

    const handleSwitchTheme = () => {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: {
                status: (state.theme.status === 'light') ? 'dark' : 'light'
            }
        })
    }

    return (
        <div style={{
            backgroundColor: state.theme.status === 'light' ? '#FFF' : '#000', color: state.theme.status === 'light' ? '#000' : '#FFF'
            }}>
            <h1>Título da página</h1>
            Tema: {state.theme.status}
            <button onClick={handleSwitchTheme}>Mudar tema</button>
            <hr />
            <Routes>
                <Route path='/' element={<SingUp />} />
                <Route path='/exibir' element={<ShowData />} />
            </Routes>
        </div>
    );
}

export default App;