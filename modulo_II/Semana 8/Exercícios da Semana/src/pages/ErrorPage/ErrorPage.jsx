import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';

function ErrorPage() {

    const [ , setBanner] = useContext(BannerContext);
    useEffect(() => 
        setBanner({
            title: 'Lamentamos o ocorrido!',
            subtitle: 'Tente novamente ou entre em contato'
        }), [])

    return (  
        <>
            <Header></Header>
            <Banner></Banner>
            <img src='./pagina-de-erro-404.jpg' className='w-100 h-100'></img>
            <Footer></Footer>
        </>
    );
}

export default ErrorPage;