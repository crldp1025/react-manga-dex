import React from 'react';
import ReactDOM from 'react-dom/client';
import './themes/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import ThemeProvider from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
