import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Buttons from './components/buttons/Buttons.tsx';
import Inputs from './components/inputs/Inputs.tsx';
import Dropdowns from './components/dropdowns/Dropdowns.tsx';
import Checkboxes from './components/checkboxes/Checkboxes.tsx';
import Tooltips from './components/tooltips/Tooltips.tsx';
import React from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/components/buttons',
    element: <Buttons />,
  },
  {
    path: '/components/inputs',
    element: <Inputs />,
  },
  {
    path: '/components/checkboxes',
    element: <Checkboxes />,
  },
  {
    path: '/components/dropdowns',
    element: <Dropdowns />,
  },
  {
    path: '/components/tooltips',
    element: <Tooltips />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
