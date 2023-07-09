import { useContext } from "react";
import Banner from "../../../../../Semana 9/Exercícios da Semana/src/components/Banner/Banner";
import Footer from "../../../../../Semana 9/Exercícios da Semana/src/components/Footer/Footer";
import Header from "../../../../../Semana 9/Exercícios da Semana/src/components/Header/Header";
import Search from "../../components/Search/Search";
import { BannerContext } from "../../contexts/BannerContext";
import { useEffect } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import QuestionAccordion from "../../components/QuestionAccordion/QuestionAccordion";
import Container from "react-bootstrap/esm/Container";

function FAQPage() {
  const faqQuestions = [
    {
      title: "Os produtos contém nota fiscal?",
      description: "Sim, todos os nossos produto possuem nota fiscal",
    },
    {
      title: "Os produtos tem garantia?",
      description: "Sim, todos ele tem garantia conforme políticas do fabricante.",
    },
    { title: "Enviam para todo o Brasil?", description: "Sim, enviamos para todo território nacional. Valores de frete dependem da localidade." },
  ];

  const [, setBanner] = useContext(BannerContext);
  useEffect(() =>
    setBanner({
      title: "Aqui você pode tirar suas dúvidas",
      subtitle: "Como podemos lhe ajudar?",
    })
  );

  return (
    <Container fluid className=" min-vh-100">
      <Header></Header>
      <Banner></Banner>
      <Search></Search>
      <QuestionAccordion>      
        {faqQuestions.map((q, i) => {
          return (
            <QuestionCard
              title={q.title}
              description={q.description}
              key={i}
              id={i}
            ></QuestionCard>
          );
        })}
        </QuestionAccordion>
      <Footer className='fixed-bottom'></Footer>
      </Container>
  );
}

export default FAQPage;
