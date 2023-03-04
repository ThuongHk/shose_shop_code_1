import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/:id', component: Detail}
]

