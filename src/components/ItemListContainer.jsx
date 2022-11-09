import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productosHC } from "./Data";
import Item from "./ItemList";


export default function ItemListContainer({greeting}){
   
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
   
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);
   
    return (
        <>
        <div className="saludo">{greeting}</div>
       
        <div>
          <Item productos={productos}/>
        </div>
        
        </>
    )
 }


