import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;