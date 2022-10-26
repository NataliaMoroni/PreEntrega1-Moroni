import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from './components/BodyApp';
import Footer from './components/Footer';



export default function App() {

  return (
   <div>
    
   <Navbar/>
   <ItemListContainer greeting={"Saludo!"}/>
   <BodyApp/>
   <Footer/>

   </div>
  );
}


