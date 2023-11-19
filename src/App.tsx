import React from 'react';

import { useMemo } from 'react';
import RouterBuilder from './App.router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss'; 

const App: React.FC = () => {

  const routes = useMemo(() => RouterBuilder(), []);

  return (
    <div className='container content'>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
};

export default App;