import React from 'react';
import { type RouteObject } from 'react-router-dom';

import NotFoundPage from './pages/Error/NotFound';
import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import AppLayout from './App.loyout';


const RouterBuilder = () => {

	const authorizedRoutes: RouteObject[] = [
	];

	const generalRoutes: RouteObject[] = [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/error',
            element: <ErrorPage /> 
        },
        {
            path: '/not-found',
            element: <NotFoundPage /> 
        },
		{
			path: '*',
			element: <NotFoundPage />,
		},
	];

	const routes: RouteObject[] = [
		{
			element: <AppLayout />,
			children: [...authorizedRoutes, ...generalRoutes],
		},
	];

	return routes;
};

export default RouterBuilder;
