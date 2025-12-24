import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

// GitHub Pages 배포용 basename 설정
const basename = import.meta.env.BASE_URL;

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
], {
    basename: basename,
});
