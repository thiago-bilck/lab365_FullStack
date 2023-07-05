import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import FAQPage from './pages/FAQPage/FAQPage';
import ErrorPage from './pages/ErrorPage/ErrorPage'

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/contact' Component={ContactPage}></Route>
        <Route path='/faq' Component={FAQPage}></Route>
        <Route path='*' Component={ErrorPage}></Route>
      </Routes>
   </Router>
  );
}

export default App;
