/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";


export const Cocina = () => {
  
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
           <div className="header-cocina">
           <header>
           <div>
           <img src={logo} alt="logo" className="logo-cocina" />
           </div>
            
           <div className="cocina">
           <h1>Pedido en cocina</h1> 
           </div>

            <div className="btn-logout">
            <span className="material-icons" onClick={handleLogout}>
              exit_to_app
            </span>
            </div>
            </header>
            </div>

            <div className="container-pedidos">
                <div className="pedidos"> 

                </div>
            </div>
       </Fragment>
            
    );
}