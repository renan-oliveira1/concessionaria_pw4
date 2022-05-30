import React, { useEffect, useState, useContext } from 'react';
import Nav from '../../components/Nav'
import Button from '../../components/button/Button';
import { HelpContext } from "../../contexts/HelpContext";
import { useNavigate } from 'react-router-dom';

export default function Vehicles() {
    const navigate = useNavigate()
    const { setIdVehicle } = useContext(HelpContext)

    const [vehicles, setVehicles] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    
    async function fetchData() {
        const url = 'http://localhost:3030/vehicles/notselled'
        const response = await fetch(url)
        const data = await response.json()

        if(data){
            setVehicles(data)
            setLoading(true)
        }
    
    }

    function handleClickEdit(e) {
        setIdVehicle(e.target.id)
        navigate("/vehicleForm")
    }

    function handleClickSell(e) {
        setIdVehicle(e.target.id)
        navigate("/sellVehicle")
    }

    
        if(loading==false){
            return (<div className="App">
                <Nav />
                <h1> Pleses wait some time.... </h1> </div>
            )
        }
        return(
            <div className="App">
                <Nav/>
                <h1>Veículos disponiveis para venda</h1> <br/>
                <h2>Cadastre um novo veiculo <a href='/vehicleForm'><button className="btn-vehicles">Aqui</button></a></h2>
                <table className="table container">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Preço</th>
                            <th scope="col">#</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <th scope="row">{vehicle.id}</th>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.price}</td>
                                <td><button id={vehicle.id} className="btn-vehicles" onClick={handleClickSell}>Vender</button></td>
                                <td><button id={vehicle.id} className="btn-vehicles" onClick={handleClickEdit}>Editar</button></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
}