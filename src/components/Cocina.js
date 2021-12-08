/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from 'react'
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Kitchen from "../assets/kitchen.png";
import Logout from "../assets/logout.png";
import { helpHttp } from "../helpers/helpers";
import { Pedidos } from "./Pedidos";

export const Cocina = () => {
  const [data, setData] = useState([]);
  const [setError] = useState();
  const { logout } = useAuth();
  const history = useHistory();
  let api = helpHttp();
  // let url = "https://dbfakeross.herokuapp.com/Orders?cliente="+nombreCliente;
  let url = "https://dbfakeross.herokuapp.com/orders";

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Server Error");
    }
  };

  // manejo de Data
  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, []);
  console.log(data);

  data.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <Fragment>
      <header className="header-cocina">
        <img src={Kitchen} alt="logo" className="logo-cocina" />

        <img src={Logout} alt="logo" className="logout-cocina" onClick={handleLogout} />

      </header>

      <div className="pedidos-container">
        {data && <Pedidos products={data} />}
      </div>
    </Fragment>

  );
}