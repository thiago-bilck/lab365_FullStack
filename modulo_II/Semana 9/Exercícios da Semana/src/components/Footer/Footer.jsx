import './Footer.css'

function Footer() {
    return ( 
        <div className='footer-wrapper mt-5 w-100'>
            <div className="row p-1">
                <div className="col-lg-4">
                    <h1><strong>RUMO CERTO</strong></h1>
                    <span>RUMO CERTO® Alguns direitos reservados</span>
                </div>

                <div className="col-lg-4">
                    <h2>CONTATO</h2>
                    <br />
                    +55 00 11111-2222
                    rumocerto@rumocerto.com
                    <hr />
                    <p>Rua abcd, 99 - Bairrópolis</p>
                    <p>Cidadópolis - UF</p>
                    <hr />
                    <div className="footerContainer h-25 d-inline-block">
                    <img src="./instagram-logo.svg"  className='m-1'/>
                    <img src="./facebook-logo.png" className='m-1'/>
                    <img src="./youtube-logo.svg" className='m-1'/>
                    </div>
                </div>

                <div className="col-lg-4">
                    <h2>INFORMAÇÕES</h2>
                    <p>Equipamentos</p>
                    <p>Seguro</p>
                    <p>Contato</p>
                    <p>Termos e condições</p>
                

                </div>

            </div>

        </div>
     );
}

export default Footer;