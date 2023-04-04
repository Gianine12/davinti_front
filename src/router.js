import { createBrowserRouter } from 'react-router-dom';
import { Contato } from './pages/Contato';
import { ListaContato } from './pages/PesquisaContato';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Contato/>
    },
    {
        path: "/lista",
        element: <ListaContato/>
    }
]);
