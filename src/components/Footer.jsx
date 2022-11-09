import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
        <div>
        <ul>
            <li>
            <Link to={`https://www.facebook.com/`}>Facebook</Link>   
             {/*<a href="https://www.facebook.com/">Facebook</a>*/}
            </li>
        </ul>
        </div>
        </>
    )
 }