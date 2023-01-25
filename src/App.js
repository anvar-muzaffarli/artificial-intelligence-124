import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'
import './App.css';

// KOMPONENTLERIN DAXIL EDILMESI
import Navbar from './components/Navbar'

function App() {
  // JSX ELEMENTLERININ  BIR VALIDEYN ELEMENTI OLMALIDIR
  // cunki returnun icerisinde ancaq bir ifade ola biler
  return (
    <>
 
  <Navbar />
  </>
  );
}

export default App;
