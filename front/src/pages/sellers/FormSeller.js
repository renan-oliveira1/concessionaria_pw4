import { useEffect } from "react";
import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav'
import { HelpContext } from "../../contexts/HelpContext"; 


export default function FormSeller(){
    const { idSeller } = useContext(HelpContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const [message, setMessage] = useState("")

    useEffect(() => {
        if(idSeller){
            fetchSeller()
        }
    }, [])

    async function fetchSeller() {
        const url = `http://localhost:3030/sellers/${idSeller}`
        const response = await fetch(url)
        const data = await response.json()

        if (data) {
            setName(data.name)
            setAge(data.age)
        }

    }

    let handleSubmit = async (e) => {
        e.preventDefault()
    
        if(idSeller){
            updateSeller()
        }else{
            createSeller()
        }
    }


    async function updateSeller() {
        let body = JSON.stringify({
            id: idSeller,
            name: name,
            age: age,
        })
        try {
            let res = await fetch(`http://localhost:3030/sellers/${idSeller}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if (res.status == 200) {
                navigate("/sellers")
            } else {
                setMessage("Erro ao cadastrar vendedor, tente novamente!")
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function createSeller(){
        let body = JSON.stringify({
            name: name,
            age: age,
        })
        try {
            let res = await fetch("http://localhost:3030/sellers", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if (res.status == 200) {
                navigate("/sellers")
            } else {
                setMessage("Erro ao cadastrar vendedor, tente novamente!")
            }
        } catch (e) {
            console.log(e)
        }
    }


    return(
        <div className='App'>
            <Nav />
            <div className="container">
                <h1>Cadastro vendedor</h1><br />
                <form onSubmit={handleSubmit} action="POST">

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nome</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Ex: Gabriel" aria-describedby="basic-addon1" value={name ? name : ""}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Idade</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Ex: 15" aria-describedby="basic-addon1" value={age ? age : ""}
                            onChange={e => setAge(e.target.value)} />
                    </div>

                    <button className="btn-vehicles" type='submit'>Salvar</button>


                    <div className="message">{message ? <p>{message}</p> : null}</div>

                </form>
            </div>
        </div>
    )
}