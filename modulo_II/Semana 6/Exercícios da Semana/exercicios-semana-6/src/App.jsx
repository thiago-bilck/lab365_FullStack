import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container h-100">
    <Header></Header>
    <Banner slogan={'Sempre prontos para lhe ajudar na sua aventura!'}></Banner>
    <Main></Main>
    <Footer></Footer>
    </div>
  );
}

export default App;
