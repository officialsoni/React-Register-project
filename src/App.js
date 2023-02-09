import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Rates from './Components/Rates';
import Contact from './Components/Contact';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
         {/* <Header /> */}
       
        <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Rates" element={<Rates />} />
              <Route path="/Contact" element={<Contact />} />
         </Routes>
         <Footer />
         
    </>
  );
}

export default App;
