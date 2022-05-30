import React from 'react';
import './style.scss'
import woodyCarsImg from '../assets/images/Woody.png'

export default class Nav extends React.Component{

    render() {
        return(
            <div className="nav-bar">
                <aside>
                    <img className="logo" src={woodyCarsImg} alt="Logo da empres Woody Cars" />
                    <a href='/'><p>Woody Cars</p></a>
                </aside>
                <nav>
                    <ul className="nav-links">
                        <li><a href='/vehicles'><button className="btn-vehicles">Veiculos</button></a></li>
                        <li><a href='/sellers'><button className="btn-sellers">Vendedores</button></a></li>
                    </ul>
                </nav>
            </div>
    
        )
    }
}