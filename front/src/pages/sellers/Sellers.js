import React, { useEffect, useState, useContext } from 'react';
import Nav from '../../components/Nav'
import { HelpContext } from "../../contexts/HelpContext"; 
import { useNavigate } from 'react-router-dom';
 
export default function Sellers(){
    const navigate = useNavigate()
    const {setIdSeller} = useContext(HelpContext)

    const [sellers, setSellers] = useState()
    const [loading, setLoading] = useState(false)



    useEffect(() => {

        fetchData()
    
    }, [])

    async function fetchData() {
        const url = 'http://localhost:3030/sellers'
        const response = await fetch(url)
        const data = await response.json()

        if(data){
            setSellers(data)
            setLoading(true)
        }

    }

    function handleClickEdit(e){
        setIdSeller(e.target.id)
        navigate("/sellerForm")
    }

    function handleClickInfo(e) {
        setIdSeller(e.target.id)
        navigate("/infoSeller")
    }



        if (loading == false) {
            return (
                <div>
                    <Nav/>
                    <div className="container">
                        <h1> Pleses wait some time.... </h1>
                    </div>
                </div>
            )
        }
        return (
            <div className="App">
                <Nav />
                <h1>Vendedores</h1> <br />
                <h2>Insira um novo vendedor <a href='/sellerForm'><button className="btn-seller">Aqui</button></a></h2>
                <table className="table container">
                    <thead className="table">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Idade</th>
                            <th scope="col">#</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller) => (
                            <tr key={seller.id}>
                                <th scope="row">{seller.id}</th>
                                <td>{seller.name}</td>
                                <td>{seller.age}</td>
                                <td><button id={seller.id} className="btn-sellers" onClick={handleClickInfo}>Informações</button></td>
                                <td><button id={seller.id} className="btn-sellers" onClick={handleClickEdit}>Editar</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        )
}