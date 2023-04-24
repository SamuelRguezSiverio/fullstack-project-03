import { createBrowserRouter } from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import Home from '../pages/Home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />
    },
    {
        path: '/',
        element: <Home />
    }
])

export default router