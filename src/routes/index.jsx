import { createBrowserRouter } from 'react-router-dom';
import Maintenance from '~/pages/maintenance';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Maintenance />
  }
]);

export default routes;
