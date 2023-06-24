import styles from './Triangle.module.css'

export function Triangle({nome, lado='nenhum'}) {

    return(
        <div>
            <h1>Forma geométrica: {nome}</h1>
            <h2>Quantidade de lados: {lado}</h2>

            <div className={styles.triangle}></div>
            <br /> 
        </div>
    )
}