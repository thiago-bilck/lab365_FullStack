import { useContext, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { BannerContext } from "../../contexts/BannerContext";

function HomePage() {

    const [ , setBanner] = useContext(BannerContext)

    useEffect(() => 
    setBanner({
        title: 'Sua aventura começa aqui!',
        subtitle: 'Esteja preparado.'
    }),
    [])

    return (  
        <div className="app-container h-100">
        <Header></Header>
        <Banner slogan={'Sempre prontos para lhe ajudar na sua aventura!'}></Banner>
        <Main></Main>
        <Footer></Footer>
        </div>
    );
}

export default HomePage;