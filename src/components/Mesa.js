import React, { Fragment, useState } from "react";
import Mesita from "../assets/mesa-pedido.png";
import Ordenmesa from "../assets/pedido-m.png";
import Logout from "../assets/logout.png";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const Mesa = () => {

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
            <div className="header-mesa">
                <img src={Mesita} alt="logo" className="logo-mesa" />
                <img src={Logout} alt="logo" className="logout-mesa-p" onClick={handleLogout} />
            </div>
            <div className="pedido-mesa">
                <p>SOY EL PEDIDO QUE VA A LA MESA</p>
                <img src={Ordenmesa} alt="logo" className="logo-mesa" />
            </div>
        </Fragment>
    );
}