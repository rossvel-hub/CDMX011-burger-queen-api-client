/* eslint-disable react/prop-types */
import React, { Fragment, useState} from 'react'
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Kitchen from "../assets/kitchen.png";
import Logout from "../assets/logout.png";
// import { helpHttp } from "../helpers/helpers";
// import {useLocation} from "react-router-dom";


export const Cocina = (props) => {
 // const search = useLocation().search;
  // const clienteName = new URLSearchParams(search).get('cliente');
    let {
      productsToOrder
    } = props;
    
    // const [db, setDb]= useState();
    const [setError] = useState();
    const { logout } = useAuth();
    const history = useHistory();

      const handleLogout = async () => {
        try {
          await logout();
          history.push("/login");
        } catch (error) {
            setError("Server Error");
        }
      };

  return (
    <Fragment>
      <header className="header-cocina">
            <img src={Kitchen} alt="logo" className="logo-cocina" />
            <p>{productsToOrder}</p>
            <img src={Logout} alt="logo" className="logout-cocina" onClick={handleLogout}/>
        
      </header>

      <div className="pedidos-container">
        <div className="pedidos-grid">
        <p className="pedido-card-header">Pedido</p>
        <p className="nombre-client-cocina">Cliente : </p>
        <p className="tiempo-preparacion">Track time:</p>
        <button className="btn-mandar-mesa" >
          Mandar a Mesa
        </button>
        </div>
      </div>
    </Fragment>

  );
}