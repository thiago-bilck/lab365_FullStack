import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/esm/Container';

function ErrorPage() {

    const [ , setBanner] = useContext(BannerContext);
    useEffect(() => 
        setBanner({
            title: 'Lamentamos o ocorrido!',
            subtitle: 'Tente novamente ou entre em contato'
        }), [])

    return (  
        <Container fluid>
            <Header></Header>
            <Banner></Banner>
            <Image src='./pagina-de-erro-404.jpg' className='w-100 h-100'></Image>
            <Footer></Footer>
            </Container>
    );
}

export default ErrorPage;