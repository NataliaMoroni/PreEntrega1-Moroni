import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import BodyApp from './components/BodyApp';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import Tienda from './components/Tienda';
import ItemDetailContainer from './components/ItemDetailContainer';


export default function App() {

  return (
   <div>
  
   <BrowserRouter> 
   <Navbar/>
   <Routes>
    <Route path="/" element={<ItemListContainer greeting={"Saludo!"}/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/tienda' element={<Tienda/>}/>
    <Route path='/category/:idcategory' element={<ItemListContainer/>}/>
    <Route path='/item/:iditem' element={<ItemDetailContainer/>}/>
   </Routes>
   <BodyApp/>
   <Footer/>
   </BrowserRouter>
  
   </div>
  );
}


