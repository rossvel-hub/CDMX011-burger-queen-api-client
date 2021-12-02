/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";


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
           <header>
           <div className="cocina">
            <h1>Pedido en cocina</h1> 
        </div>

        <div className="btn-logout">
            <span className="material-icons" onClick={handleLogout}>
              exit_to_app
            </span>
          </div>
          </header>

            <div className="container-pedidos">

            </div>

       </Fragment>
            
    );
}