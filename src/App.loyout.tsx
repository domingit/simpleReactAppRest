import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

interface IProps {}

// eslint-disable-next-line react-refresh/only-export-components
const AppLayout: React.FC<IProps> = () => {
	return (
		<>
		<Suspense fallback={null}>
			<Outlet />

			<div id="backdrop-root" />
			<div id="overlay-root" />


		</Suspense></>
	);
};

AppLayout.displayName = 'AppLayout';
AppLayout.defaultProps = {};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(AppLayout);