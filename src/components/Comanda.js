/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Comanda = () => {

    return (
        <div className="comanda">
            <h2>Comanda</h2>

            <div className="col-2">
                <button className="btn-remove">
                    -
                </button>{' '}
                <button className="btn-add">
                    +
                </button>
            </div>
            <button className="btn-enviar-cocina">ENVIAR A COCINA</button>
            <Link to='/Cocina'> :</Link>
            <p>Cliente estrella :</p>

        </div>

    )
}

export default Comanda;