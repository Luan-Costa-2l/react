import { Routes, Route, useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../RequireAuth';
import { Login } from '../pages/Login';

export const MainRouteList = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/sobre', element: <RequireAuth><About /></RequireAuth>},
        {path: '/login', element: <Login />},
        {path: '/sobre/:slug', element: <AboutItem />},
        {path: '*', element: <NotFound />}
    ]);

    // Com o uso do useRoutes eu não preciso mais usar o código abaixo
    /*
    return (
        <>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<RequireAuth><About /></RequireAuth>} />
                <Route path='/login' element={<Login />} />
                <Route path='/sobre/:slug' element={<AboutItem />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
    */
}