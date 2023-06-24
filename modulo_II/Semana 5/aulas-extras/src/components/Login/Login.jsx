import { useState, useRef } from 'react';
import styles from './Login.modules.css'

export function Login(props) {
    console.log('Página atualizada')

    
    {/*USESTATE */}
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     const data = {
    //         email,
    //         password
    //     }

    //     console.log(data)
    // }


    // return (  
    //     <div className='login'>
    //         <div className='logincontainer'>

    //             <h1>Tela de Login: </h1>
    //             <form onSubmit={handleSubmit}>
    //                 <label>E-mail:
    //                 <input 
    //                     onChange={() => setEmail(event.target.value)}
    //                     type="email"
    //                     id="'credential"
    //                     placeholder="Digite o seu email">
    //                 </input>
    //                 </label>

    //                 <label>Senha:
    //                 <input
    //                     onChange={() => setPassword(event.target.value)}
    //                     type="password"
    //                     id="'password"
    //                     placeholder="Digite sua senha">
    //                 </input>
    //                 </label>

    //                 <input type="submit" value='Entrar' />
    //             </form>

    //         </div>

    //     </div>
    // );


{/*USEREF */}
//com este hook o componente não fica renderizando a cada mudança de estado

    const emailInputElement = useRef();
    const passwordInputElement = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email: emailInputElement.current?.value,
            password: passwordInputElement.current?.value
        }

        console.log(data)
    }


    return (  
        <div className='login'>
            <div className='logincontainer'>

                <h1>Tela de Login: </h1>
                <form onSubmit={handleSubmit}>
                    <label>E-mail:
                    <input 
                        ref={emailInputElement}
                        type="email"
                        id="'credential"
                        placeholder="Digite o seu email">
                    </input>
                    </label>

                    <label>Senha:
                    <input
                        ref={passwordInputElement}
                        type="password"
                        id="'password"
                        placeholder="Digite sua senha">
                    </input>
                    </label>

                    <input type="submit" value='Entrar' />
                </form>

            </div>

        </div>
    );
}

