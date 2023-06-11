import { createBrowserRouter } from 'react-router-dom';
import FrontLayout from '~/layouts/front';
import Home from '~/pages/home';
import Maintenance from '~/pages/maintenance';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        //path: '/',
        index: true,
        element: <Maintenance />
      },
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
]);

export default routes;
