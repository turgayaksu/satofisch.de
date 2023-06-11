import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '~/assets/css/style.css';

import routes from './routes';

ReactDOM.createRoot(document.getElementById('wrapper')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
