import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaProdutos from './Routes/ListaProdutos';
import Editar from './Routes/Editar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { UsuarioContextProvider } from './Context/UsuarioContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/ListaProdutos',
    element: <ListaProdutos />,
  },
  {
    path: '/Editar/:Nome_Produto',
    element: <Editar />
  }

])


root.render(
  <React.StrictMode>
    <UsuarioContextProvider>
        <RouterProvider router={router}/>
    </UsuarioContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
