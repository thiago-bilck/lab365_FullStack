import './App.css'
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const name = 'Thiago';
  const messageBanner = 'Legal ter você conosco';
  const title = 'Título do cartão';
  const lastMessage = 'Obrigado pela sua visita'

  return (
    <>
      <div className='body'>
      
        <Header nome={name}/>
        <Banner message={messageBanner}/>
        <Content cardTitle={title}/>
        <Footer footerMessage={lastMessage}></Footer>
      </div>
    </>
  )
}

export default App
