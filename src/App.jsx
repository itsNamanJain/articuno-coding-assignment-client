import React,{useState} from 'react'
import './bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
const App = () => {
  const [show, setShow] = useState(true);
  const [uname,setName] = useState("");

  return (
    <Router>
    <Header show={show} setShow={setShow} uname={uname} setName={setName}  />
    <Routes>
    <Route exact path="/" element={<HomeScreen/>} />
    <Route exact path="/cart" element={<CartScreen show={show} setShow={setShow} setName={setName}  />} />
    </Routes>
    </Router>
  )
}

export default App