import { HelpContext } from "../../contexts/HelpContext"; 
import { useContext, useState, useEffect } from "react";
import Nav from '../../components/Nav'
import { useNavigate } from 'react-router-dom';

export default function SellVehicle(){
    const navigate = useNavigate()

    const {idVehicle} = useContext(HelpContext)

    const [vehicle, setVehicle] = useState()
    const [sellers, setSellers] = useState()
    const [loading, setLoading] = useState(false)
    const [selectedSeller, setSelectedSeller] = useState()

    useEffect(() => {

        fetchSellers()
        fetchVehicle()

    }, [])

    async function fetchVehicle() {
        const url = `http://localhost:3030/vehicles/${idVehicle}`
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            console.log(idVehicle)
            console.log(data)
            setVehicle(data)
            setLoading(true)
        }
    }

    async function fetchSellers() {
        const url = 'http://localhost:3030/sellers'
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            setSellers(data)
        }

    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        let body = JSON.stringify({
            id: idVehicle,
            name: vehicle.name,
            model: vehicle.model,
            price: vehicle.price,
            sellerId: selectedSeller,
        })

        try {
            let res = await fetch(`http://localhost:3030/vehicles/${idVehicle}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if (res.status == 200) {
                navigate("/sellers")
            }
        } catch (e) {
            console.log(e)
        }
    }

    if (!vehicle || !sellers) {
        return (
            <div>
                <Nav />
                <div className="container">
                    <h1> Pleses wait some time.... </h1>
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            <Nav />
            <div className="container">
                <h1>Veiculo</h1>
                <h2>Nome: {vehicle.name}</h2>
                <h2>Modelo: {vehicle.model}</h2>
                <h2>Preço: {vehicle.price}</h2>
                <h2>Comissão: {vehicle.price * 0.03}</h2>
                <form onSubmit={handleSubmit} action="PUT">
                    <table className="table container">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map((seller) => (
                                <tr key={seller.id}>
                                    <td><input type="radio" name="sellerId" value={seller.id} onChange={(e) => setSelectedSeller(e.target.value)}/></td>
                                    <th scope="row">{seller.id}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.age}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                    <button type="submit" className="btn-vehicles">Vender</button>
                </form>
            </div>
        </div>
    )

}