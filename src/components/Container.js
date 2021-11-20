import React, { useState, Fragment, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import table from '../assets/table.png';
// import { data } from '../dataMock/data.json';
import { Menu } from '../components/Menu';

export const Container = function () {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	// const [desayuno, setDesayuno] = useState(true)
	const history = useHistory();

	// const [data, setData] = useState([]);
	// const [dataToEdit, setDataToEdit] = useState(null);
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
		let url = 'http://localhost:5000/Products';
		let getFetchData = await fetch(url).then(result => result.json())
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

	return (
		<Fragment>
			<header>
				<img src={logo} alt='logo' className="logo-container" />
			</header>
			<h1>Hola (...), estas en el sistema de pedidos</h1>
			<div>
				<span className="material-icons-outlined">
					face
				</span>
				<input type="text" className="input-name-cliente" placeholder='Ingresa nombre del cliente' required />
			</div>
			<span className="material-icons" onClick={handleLogout}>
				exit_to_app
			</span>
			{error && <p className="error">{error}</p>}


			<div className="container-menu">
				<div className="opciones-menu">
					<h1>Burguer Queen Menu</h1>
					{products && products.data.map(product =>
						<Menu product={product} key={product.id} />
					)}
					{/* <button onClick={() => { setDesayuno(true) }}>Desayuno</button>
					<button onClick={() => { setDesayuno(false) }}>Almuerzo</button>
					{desayuno ? <ul><li>Cafe Americano</li><li>Cafe con leche</li><li>Jugo de frutas</li><li>Sandwich de jamon y queso</li></ul> :
						<ul><li>Hamburguesa sencilla</li><li>Hamburguesa doble</li><li>Papas fritas</li><li>Aros de cebolla</li><li>Agua 500 mil</li><li>Agua 750ml</li><li>Gaseosa 500ml</li><li>Gaseosa 750ml</li></ul>
					} */}
				</div>
				<div className="comanda">
					<h2>Comanda</h2>
					<button className="btn-enviar-cocina">ENVIAR A COCINA</button>
				</div>
			</div>
			<footer>
				<img src={table} alt='table' className="footer-table" />
			</footer>
		</Fragment>
	);
};
