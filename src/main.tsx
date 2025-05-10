import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/tailwind.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <div>about</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
