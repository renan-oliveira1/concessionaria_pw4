import React from 'react';
import Nav from '../../components/Nav'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpContext } from "../../contexts/HelpContext"; 

export default function Vehicles(){
    const { idVehicle } = useContext(HelpContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [price, setPrice] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        if(idVehicle){
            fetchVehicle()
        }
    }, [])

    let handleSubmit = async (e) => {
        e.preventDefault()

        if(idVehicle){
            updateVehicle()
        }else{
            createVehicle()
        }
    }
    async function updateVehicle() {
        let body = JSON.stringify({
            id: idVehicle,
            name: name,
            model: model,
            price: price
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
                navigate("/vehicles")
            } else {
                setMessage("Erro ao cadastrar vendedor, tente novamente!")
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function createVehicle(){
        try {
            let body = JSON.stringify({
                name: name,
                model: model,
                price: parseInt(price)
            })

            let res = await fetch("http://localhost:3030/vehicles", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if (res.status == 200) {
                setMessage("Sucesso")
                navigate("/vehicles")
            } else {
                setMessage("Erro ao cadastrar veiculo, tente novamente")
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchVehicle(){
        const url = `http://localhost:3030/vehicles/${idVehicle}`
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            setName(data.name)
            setModel(data.model)
            setPrice(data.price)
        }
    }


        return(
            <div className='App'>
                <Nav />
                <div className="container">
                    <h1>{idVehicle ? <p>Editar Veiculo</p> : <p>Cadastro Veiculo</p>}</h1><br/>
                    <form onSubmit={handleSubmit} action="POST">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Veiculo</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Ex: Ferrari" aria-label="Ex: Ferrari" aria-describedby="basic-addon1"
                                value={name ? name : ""} onChange={ (e) => setName(e.target.value) }/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Modelo</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Ex: Ferrari" aria-label="Ex: Ferrari" aria-describedby="basic-addon1"
                                value={model ? model : ""} onChange= {e => setModel(e.target.value)}/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Preço</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Ex: 50000.00" aria-label="Ex: 50000.00" 
                                value={price ? price : ""} aria-describedby="basic-addon1" onChange={ e => setPrice(e.target.value) }/>
                        </div>

                        <button className="btn-vehicles" type='submit'>Salvar</button>


                        <div className="message">{message ? <p>{message}</p> : null}</div>
                
                    </form>
                </div>
            </div>
        )

}