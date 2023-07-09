import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";
import ContactCard from "../../components/ContactCard/ContactCard";
import Container from "react-bootstrap/esm/Container";
// import ContactCard from "../../components/ContactCard/ContactCard.jsx"

function ContactPage() {

    const [, setBanner] = useContext(BannerContext)
    useEffect(() => 
        setBanner({
            title: "Deixe seu recado!",
            subtitle: "Queremos lhe ajudar"
        }),
        []) 
        

    return (  
        
        <Container fluid className="bg-white">
            <Header></Header>
            <Banner></Banner>
            <ContactForm></ContactForm>
            <ContactCard></ContactCard>
            <Footer></Footer>
            </Container>
        
    );
}

export default ContactPage;