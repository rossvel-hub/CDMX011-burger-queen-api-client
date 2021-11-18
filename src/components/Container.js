import React, { useState, Fragment }  from 'react';
import { useAuth } from '../context/AuthContext';

export const Container = function () {
  const [setError] = useState('');
  const { logout } = useAuth();

  const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			setError('Server Error')
		}
	}

  return (
	<Fragment>
    <h1>Hola, estas en el sistema de pedidos</h1>
	<span className="material-icons" onClick={handleLogout}>
					exit_to_app
				</span>
				</Fragment>
  );
};
