import React from 'react';
import './style.scss'

export default function Button(props){
    return(
        <a {...props.type}><button className="btn">{props.text}</button></a>
    )
}