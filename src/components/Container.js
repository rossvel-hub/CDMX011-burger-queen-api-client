import React, { useState, Fragment, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import table from '../assets/table.png';
import Menu from '../components/Menu';

export const Container = function () {
	const [error, setError] = useState('');
	const [nombre, setNombre] = useState('')
	const { logout } = useAuth();
	// const [desayuno, setDesayuno] = useState(true)
	const history = useHistory();

	// const [data, setData] = useState([]);
	// // const [dataToEdit, setDataToEdit] = useState(null);
	//   let api = helpHttp();
	//   let url = ' http://localhost:5000/Products';

	//   useEffect(() => {
	//     api.get(url).then((res) => {
	//       console.log(res);
	//       if (!res.err) {
	//         setData(res)
	//       } else {
	//         setData(null)
	//       }
	//     });
	//   }, [])

	let [products, setProducts] = useState();

	let getData = async () => {
		let url = 'http://localhost:5000/products'
		let getFetchData = await fetch(url).then(result => result.json())
		console.log(getFetchData);
		setProducts(getFetchData);
	}

	useEffect(() => {
		getData()
	}, [])

	const handleLogout = async () => {
		try {
			await logout();
			history.push('/login');
		} catch (error) {
			setError('Server Error')
		}
	}

const handleName = e => setNombre(e.target.value);
// const handleEmail = e => setEmail(e.target.value);


	return (
		<Fragment>
			<header>
				<img src={logo} alt='logo' className="logo-container" />
			</header>
			<h4>Hola (...), estas en el sistema de pedidos</h4>
			<div>
				<span className="material-icons">
					face
				</span>
				<label>
					Nombre del cliente:
					<input type="nombre" className="input-name-cliente" placeholder='Ingresa nombre del cliente' onChange={handleName} required />
				</label>

			</div>
			<span className="material-icons" onClick={handleLogout}>
				exit_to_app
			</span>
			{error && <p className="error">{error}</p>}


			<div className="container-menu">
				<div className="opciones-menu">
					<h2>Burguer Queen Menu</h2>
					{products && products.map(product => 
						<Menu product={product} key={product.id} />
					)}
				</div>
				<div className="comanda">
					<h2>Comanda</h2>
					<button className="btn-enviar-cocina">ENVIAR A COCINA</button>
					<p>Cliente estrella : {nombre}</p>

				</div>
			</div>
			<footer>
				<img src={table} alt='table' className="footer-table" />
			</footer>
		</Fragment>
	);
};
