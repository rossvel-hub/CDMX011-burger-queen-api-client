/* eslint-disable react/prop-types */
import React from "react";
//import { helpHttp } from "../helpers/helpers";
import { useHistory } from "react-router-dom";

export const Pedidos = (props) => {
    let { products } = props;
    //const [db, setDb] = useState([]);
    const history = useHistory();

    //let api = helpHttp();
    //let url = "https://dbfakeross.herokuapp.com/orders";

    const mandarAMesa = (/*data*/) => {
        history.push('/Mesa');
        // let endpoint = `${url}/${data.id}`;
        // console.log(endpoint);

        // let options = {
        //     body: { status: "listo" },
        //     headers: { "content-type": "application/json" },
        // };
        // console.log(options);

        // api.patch(endpoint, options).then((res) => {
        //     console.log(res);
        //     console.log(options);
        //     if (!res.err) {
        //         console.log("entre al if");
        //         let newData = db.map((el) => (el.id === data.id ? data : el));
        //         setDb(newData);
        //     } else {
        //         console.log(res);
        //         //setError(res)
        //     }
        // });
    };

    const tiempoTranscurrido = (fecha) => {
        let nacimiento = new Date(fecha)
        let hoy = new Date()

        let tiempoPasado = hoy - nacimiento
        let segs = 1000;
        let mins = segs * 60;
        let hours = mins * 60;
        let days = hours * 24;
        let months = days * 30.416666666666668;
        let years = months * 12;

        //calculo 
        let anos = Math.floor(tiempoPasado / years);

        tiempoPasado = tiempoPasado - (anos * years);
        let meses = Math.floor(tiempoPasado / months)

        tiempoPasado = tiempoPasado - (meses * months);
        let dias = Math.floor(tiempoPasado / days)

        tiempoPasado = tiempoPasado - (dias * days);
        let horas = Math.floor(tiempoPasado / hours)

        tiempoPasado = tiempoPasado - (horas * hours);
        let minutos = Math.floor(tiempoPasado / mins)

        tiempoPasado = tiempoPasado - (minutos * mins);
        //let segundos = Math.floor(tiempoPasado / segs)

        console.log(`Han pasado ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, y ${minutos} minutos desde que naciste. Ya chocheas...!!`)
        return minutos;
    }

    return (
        <>
            <section className="pedidos-grid">
                {products.map((op) => (
                    <div className="pedido-card" key={op.id}>
                        <div className="pedido-card-header">
                            <p>Cliente : {op.cliente}</p>
                        </div>
                        <div className="pedido-card-body">
                            {op.productsToOrder.map((p) => (
                                <div key={p.id} >
                                    {p.qty} {p.name}
                                </div>
                            ))}
                        </div>
                        <div className="pedido-card-footer">
                            <div className="primerDiv">
                                <p>{tiempoTranscurrido(op.date) + " minutos"}</p>
                            </div>
                            <div className="segundoDiv">
                                <button className="btn-mandar-mesa"
                                    onClick={() => {
                                        mandarAMesa(op);
                                    }}
                                >
                                    <img src="" className="img-btn-mesa" />
                                    Mandar a Mesa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}