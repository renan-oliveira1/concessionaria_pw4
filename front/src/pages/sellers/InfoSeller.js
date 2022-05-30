import { useState, useContext, useEffect } from 'react'
import Nav from '../../components/Nav'
import { HelpContext } from "../../contexts/HelpContext"; 

export default function InfoSeller(){
    const { idSeller } = useContext(HelpContext)

    const [vehicles, setVehicles] = useState()
    const [seller, setSeller] = useState()

    useEffect(() => {
        loadVehicles()
        loadSeller()
    }, [])

    async function loadVehicles(){
        const url = `http://localhost:3030/vehicles/selled/${idSeller}`
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            setVehicles(data)
        }

    }

    async function loadSeller() {
        const url = `http://localhost:3030/sellers/${idSeller}`
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            setSeller(data)
        }
    }


    if (!seller || !vehicles) {
        return (
            <div>
                <Nav />
                <div className="container">
                    <h1> Pleses wait some time.... </h1>
                </div>
            </div>
        )
    }
    return(
        <div className="App">
            <Nav/>
            <div className="container">
                <h1>Vendedor</h1>
                <h2>Nome: {seller.name}</h2>
                <h2>Idade: {seller.age}</h2>
                <table className="table container">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Comissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <th scope="row">{vehicle.id}</th>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.price}</td>
                                <td>{vehicle.price * 0.03}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}