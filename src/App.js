import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'
import './App.css';
import {useEffect} from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TrustedCompanies from './components/TrustedCompanies';

// KOMPONENTLERIN DAXIL EDILMESI
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import AOS from 'aos'
import Footer from './components/Footer';
// pages qovlugundaki sehifeler
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Blog from './pages/Blog';


function App() {
  // JSX ELEMENTLERININ  BIR VALIDEYN ELEMENTI OLMALIDIR
  // cunki returnun icerisinde ancaq bir ifade ola biler

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
 <BrowserRouter>
 <Navbar />

 <Routes>
 <Route path='/' element={<Home />} />
 <Route path="*" element={<NotFound />} />
 <Route path="/xidmetlerimiz" element={<Services />} />
 <Route path="/bloglar" element={<Blog />} />
 </Routes>

 <Footer />
 </BrowserRouter>
  


  </>
  );
}

export default App;
