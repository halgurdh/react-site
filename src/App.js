import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import PaymentForm from './components/pages/PaymentForm';

function App () {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/paymentform' element={<PaymentForm/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
