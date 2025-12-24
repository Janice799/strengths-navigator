import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
]);
