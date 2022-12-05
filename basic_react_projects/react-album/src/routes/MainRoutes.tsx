import { useRoutes } from "react-router-dom";
import { Home } from '../pages/Home';
import { Galery } from '../pages/Galery'
import { Photo } from '../pages/Photos';

export const MainRoutes = () => {
    return (
      useRoutes([
        {path: '/', element: <Home />},
        {path: '/galery/:id', element: <Galery />},
        {path: '/photos/:id', element: <Photo />},
      ])
    );
}

