// import styles from './Geometrics.module.css'

// import { Round } from '../Round'
// import { Square } from '../Square'
// import { Triangle } from '../Triangle/Triangle'



// export function Geometrics() {

//     function returnParagraphs() {
//         return (
//             <div>
//                 <p>Parágrafo número 1</p>
//                 <p>Parágrafo número 2</p>

//             </div>
//         )
//     }

//     function returnParagraphsFragments() {
//         return(
//             <>
//                 <p>Parágrafo número 1</p>
//                 <p>Parágrafo número 2</p>

//             </>
//         )
//     }



//     const showSquare = true;
//     const showTriangle = true;
    
//     const listGeometrics = [
//         {
//             nome: 'Round',
//             lados:0
//         },
//         {
//             nome: 'Square',
//             lados:4
//         },
//         {
//             nome: 'Triangle',
//             lados:3
//         }
//     ]



//     function showRound(show) {
//         if(show) {
//             return <Round></Round>
//         } else {
//             return <div></div>
//         }
//     }

//     return(
//         <div className={styles.geometrics}>
            
//             {/*CONDICIONAIS */}

//             {/*Usando if/else*/}
//             {showRound(true)}

//             {/*Usando interpolação com jsx*/}
//             {showSquare ? <Square></Square> : <div></div>}

//             {/*Usando operadores lógicos*/}
//             {showTriangle && <Triangle></Triangle>}

//             <br />
            
//             {/*RENDERIZAÇÃO DE LISTAS*/ }
//             <ul>
//                 {listGeometrics.map((geometric, index) => 
//                 <li key={index}>
//                     <h1>Geometria {index+1}</h1>
//                     <h2>Forma: {geometric.nome}</h2>
//                     <h3>Quantidade de lados: {geometric.lados}</h3>

//                 </li>)}
//             </ul>

//             <br />

//             {/*FRAGMENTS */}
//             <h1>Retorno com divs</h1>
//             {returnParagraphs()}

//             <h1>Retorno com fragments</h1>
//             {returnParagraphsFragments()}



//         </div>
//     )
// }

//AULA SOBRE PROPS:

import styles from './Geometrics.module.css'

import { Round } from '../Round'
import { Square } from '../Square'
import { Triangle } from '../Triangle/Triangle'



export function Geometrics() {
    return(
                <div className={styles.geometrics}>
                    
                    <Round nome='Círculo' lado='0'></Round>
                    <Square nome='Quadrado' lado='4'></Square>
                    <Triangle nome='Triângulo' lado='3'></Triangle>
        
        
        
                </div>
            )
        }