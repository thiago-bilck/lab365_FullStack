import './App.css'
import Header from './components/Header/Header'

function App() {

  const name = 'Thiago';

  return (
    <>
      <div>
      
        <Header nome={name}/>
        <h1>Hello World!</h1>
      </div>
    </>
  )
}

export default App
