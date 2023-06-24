import { useState } from 'react'
import styles from './Events.module.css'

export function Events() {
    //Código para entender o ONCLICK
    // function cliqueUm() {
    //     console.log('Você clicou no botão número 1')
    //   }
    
    //   function cliqueDois(event) {
    //     console.log('Você clicou no botão número 2')
    //   }


    {/*ONSUBMMIT E ONCHANGE */}
    // const [nome, setNome] = useState('')

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(`O nome digitado é ${nome}`)
    // }


    {/*ONBLUR */}
    // const [name, setName] = useState('');

{/*USESTATE */}
    const [contador, setContador] = useState(0)

    function handleContador() {
        const newValue = contador+1;
        setContador(newValue);
    }


    return(
        <div className={styles.events}>

            {/*ONCLICK */}
            {/* <br />
            <button onClick={() => cliqueUm()}>Botão 1</button>

            <br />
             <button onClick={cliqueDois}>Botão 2</button>

            <br /> */}

            {/*ONSUBMMIT E ONCHANGE */}

            {/* <form onSubmit={handleSubmit}>
                <label>Digite o seu nome:</label>
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
                <input type="submit" value='Submeter'/>
            </form> */}


                {/*ONBLUR */}
            {/* <label >Digite seu nome: </label>
            <input type="text" placeholder={name} onBlur={(event) => setName(event.target.value)}/>
            <p>O nome digitado é: {name}</p> */}

{/*USESTATE */}
            {/* forma de usar com uma função a mais */}
            <h1>Valor do contador: {contador}</h1>
            <button onClick={() => handleContador()}>Incrementa contador</button>

            {/* forma de usar usando direto a função set */}
            <h1>Valor do contador: {contador}</h1>
            <button onClick={() => setContador(contador+1)}>Incrementa contador</button>
        </div>
    )
}