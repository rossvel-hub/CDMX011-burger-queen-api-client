import React, { useState, Fragment }  from 'react';
import { useAuth } from '../context/AuthContext';

export const Container = function () {
  const [setError] = useState('');
  const { logout } = useAuth();
  const [desayuno, setDesayuno] = useState(true)

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
			

			<div className="container-menu">
			<div className="opciones-menu">
				<button onClick={()=>{setDesayuno(true)}}>Desayuno</button>
				<button onClick={()=>{setDesayuno(false)}}>Almuerzo</button>
				{desayuno?<ul><li>Cafe Americano</li><li>Cafe con leche</li><li>Jugo de frutas</li><li>Sandwich de jamon y queso</li></ul>:
				<ul><li>Hamburguesa sencilla</li><li>Hamburguesa doble</li><li>Papas fritas</li><li>Aros de cebolla</li><li>Agua 500 mil</li><li>Agua 750ml</li><li>Gaseosa 500ml</li><li>Gaseosa 750ml</li></ul>
				}
			</div>
			<div className="comanda">
				<h2>Comanda</h2>
			</div>
			</div>
		</Fragment>
	);
};
