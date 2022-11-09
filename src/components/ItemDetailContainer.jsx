import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import ItemList from "./ItemList";

import { productosHC } from "./Data";


export default function ItemDetailContainer(){
  
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});
  let productosHC = [
    { id: 100, name: "Objeto1", category: "peugeot", precio: 50000, },
    { id: 101, name: "Objeto2", category: "citroen", precio: 20000, },
    { id: 102, name: "Objeto3", category: "fiat", precio: 15000,},
    
  ];

  useEffect(() => {
   
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC.find((item) => item.id == iditem));
      }, 2000);
    });

    productoPromise.then((res) => {
      setProducto(res);
    })
    }, [iditem]);
   
    return (
      
        <>
         
        <div>
        
        {producto.id ?(
         <>
         {producto.id +
          " " +
          +" " +
         producto.name +
         " "+
         producto.category +
         " "+
         producto.precio 
         }
         </>
        ) : (
          <> Loading ...</>
        )}
        </div>
        </>
    )
}
