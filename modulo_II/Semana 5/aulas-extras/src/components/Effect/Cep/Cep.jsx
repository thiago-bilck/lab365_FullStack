import { useState, useEffect } from "react";
import styles from './Cep.modules.css'
import { object } from "prop-types";

export function Cep() {
    
    const [address, setAddress] = useState({});
    const meuCep = "88042379"
    
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${meuCep}/json/`)
        .then((response) => response.json())
        .then((object) => {
            setAddress(object)
            console.log('O endereço foi gravado')
        })
    }, [])


    return (  
        <div className='cep'>
            <h1>Endereço completo</h1>
            <p>Logradouro: {address.logradouro}</p>
            <p>Complemento: {address.complemento}</p>
            <p>Bairro: {address.bairro}</p>
            <p>Cidade/UF: {address.localidade}/{address.uf}</p>
        </div>
    );
}

