import styles from './Square.module.css'

export function Square({nome, lado}) {

    return(
        <div>
            <h1>Forma geométrica: {nome}</h1>
            <h2>Quantidade de lados: {lado}</h2>

            <div className={styles.square}></div>
            <br /> 
        </div>
    )
}