import React, { useState, Fragment, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import table from '../assets/table.png';
import Menu from '../components/Menu';
import helpHttp from '../helpers/Helpers';
import Comanda from '../components/Comanda';

export const Container = function () {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	const [menu, setMenu] = useState('desayuno');
	const [productsToOrder, setProductsToOrder] = useState([]);
	const [clientName, setClientName] = useState('');
	const history = useHistory();

	const [data, setData] = useState([]);
	let api = helpHttp();
	let url = ' http://localhost:5000/Products';

	useEffect(() => {
		api.get(url).then((res) => {
			if (!res.err) {
				setData(res)
			} else {
				setData(null)
			}
		});
	}, [])

	const handleLogout = async () => {
		try {
			await logout();
			history.push('/login');
		} catch (error) {
			setError('Server Error')
		}
	}

	// Funcion NombreCliente
	const handleBlur = (e) => setClientName(e.target.value);
		
	const filterProductos = () => {
		return data.filter((p) => p.type == menu);
	};

	// Inicio de funciones para la comanda
	const addProductToCommand = (product) => {
		const exist = productsToOrder.find((x) => x.id === product.id);
		if (exist) {
			setProductsToOrder(
				productsToOrder.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty } : x
				)
			);
		} else {
			setProductsToOrder([...productsToOrder, { ...product, qty: 1 }])
		}
		console.log("funcion", productsToOrder);
	}


	const increaseProductQuantity = (product) => {
		const exist = productsToOrder.find((x) => x.id === product.id);
		if (exist) {
			setProductsToOrder(
				productsToOrder.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setProductsToOrder([...productsToOrder, { ...product, qty: 1 }])
		}
	}

	const decreaseProductQuantity = (product) => {
		const exist = productsToOrder.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setProductsToOrder(productsToOrder.filter((x) => x.id !== product.id));
		} else {
			setProductsToOrder(
				productsToOrder.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};
	// Fin de funciones para la comanda


	return (
		<Fragment>
			<header >
				<div className="header-container">
					<div>
						<img src={logo} alt='logo' className="logo-container" />
					</div>
					<div>
						<span className="material-icons">
							face
						</span>

						<label>
							Nombre del cliente  :
							<input onBlur={handleBlur} required />
						</label>
					</div>
					<div>
						<span className="material-icons" onClick={handleLogout}>
							exit_to_app
						</span>
					</div>
				</div>
			</header>

			{error && <p className="error">{error}</p>}

			<div className="container-menu">
				<div className="opciones-menu">
					<h2>Burger Queen Menu</h2>
					<div className="btns-menu">
						<button onClick={() => { setMenu("desayuno") }} className="btn-desayuno">DESAYUNO</button>
						<button onClick={() => { setMenu("almuerzo") }} className="btn-almuerzo">ALMUERZO</button>
					</div>
					<div className="table-products">
						{data && <Menu products={filterProductos()} addProductToCommand={addProductToCommand} />}
					</div>
				</div>
				<Comanda productsToOrder={productsToOrder} increaseProductQuantity={increaseProductQuantity} decreaseProductQuantity={decreaseProductQuantity} clientName={clientName} />
			</div>
		
			<footer>
				<br />
				<br />
				<br />
				<h4>Hola, estas en el sistema de pedidos</h4>
				<img src={table} alt='table' className="footer-table" />
			</footer>
		</Fragment>
	);
};
