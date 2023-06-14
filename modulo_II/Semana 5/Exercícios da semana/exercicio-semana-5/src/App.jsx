import './App.css'
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const name = 'Thiago';

  return (
    <>
      <div className='body'>
      
        <Header nome={name}/>
        <Banner/>
        <Content/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
