/* eslint-disable react/prop-types */
function Footer({footerMessage}) {
    return (  
        <div className="container-fluid bg-primary">
            <div className="row">
                <div className="col-lg-4 ">
                    <h3>{footerMessage}</h3>
                </div>
                <div className="col-lg-4">
                    <h3>Siga nossas redes sociais:</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3>Contato</h3>
                    <p>Email: meuemail@email.com</p>
                    <p>Telefone: (00) 00000-0000</p>
                    <p>Endereço: Rua abcd, 00, Terra do Nunca</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;