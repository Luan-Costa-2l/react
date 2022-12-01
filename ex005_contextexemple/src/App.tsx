import { Routes, Route } from 'react-router-dom';

import { ShowData } from './pages/ShowData';
import { SingUp } from './pages/SingUp';

import { ContextProvider } from './contexts/Context'

const App = () => {
    return (
        <ContextProvider>
            <div>
                <h1>Título da página</h1>
                <hr />
                <Routes>
                    <Route path='/' element={<SingUp />} />
                    <Route path='/exibir' element={<ShowData />} />
                </Routes>
            </div>
        </ContextProvider>
    );
}

export default App;