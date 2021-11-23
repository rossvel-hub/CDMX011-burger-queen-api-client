import React, { useState, Fragment, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import table from '../assets/table.png';
import Menu from '../components/Menu';
import helpHttp from '../helpers/Helpers';


export const Container = function () {
	const [error, setError] = useState('');
	const [nombre, setNombre] = useState('')
	const { logout } = useAuth();
	const [menu, setMenu] = useState('desayuno');
	const history = useHistory();
	const [data, setData] = useState([]);

	// const [dataToEdit, setDataToEdit] = useState(null);
	let api = helpHttp();
	let url = ' http://localhost:5000/Products';

	// let [products, setProducts] = useState();

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

	const handleName = e => setNombre(e.target.value);

	const filterProductos = () => {
		return data.filter((p) => p.type == menu);
	};

	

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
							<input type="nombre" className="input-name-cliente" placeholder='Ingresa nombre del cliente' onChange={handleName} required />
						</label>
						<input type='submit' data-testid='submit-test' className='btn-nombre' value='Ingresar el nombre a comanda'
							onClick={(e) => {
								e.preventDefault();
								handleName(nombre);
							}} />
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
					<h2>Burguer Queen Menu</h2>
					<div className="btns-menu">
						<button onClick={() => { setMenu("desayuno") }} className="btn-desayuno">DESAYUNO</button>
						<button onClick={() => { setMenu("almuerzo") }} className="btn-almuerzo">ALMUERZO</button>
						<div>
							{data && <Menu products={filterProductos()} />}
						</div>
					</div>
					{/* {products && products.map(product =>
						<Menu product={product} key={product.id} />
					)} */}
				</div>


				{/* CODIGO COMANDA */}
				<div className="comanda">
					<h2>Comanda</h2>
					<button className="btn-enviar-cocina">ENVIAR A COCINA</button>
					<p>Cliente estrella : {handleName}</p>

				</div>
			</div>

			<footer>
				<br />
				<br />
				<br />
				<h4>Hola ( Nombre Usuario ), estas en el sistema de pedidos</h4>
				<img src={table} alt='table' className="footer-table" />
			</footer>
		</Fragment>
	);
};
