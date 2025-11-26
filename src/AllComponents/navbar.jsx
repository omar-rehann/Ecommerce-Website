import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Styles/all.css"
import "../Styles/nav.css"
import Logo from "../img/Logo/logo.png"
import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    const [IsActive,setactive]=useState(false);
    function scrolly(){
        window.scrollY=0;
    }

    return(
        <>
        <div className="navbarr">
            <div className="logo">
                <div className="image">
                    <img src={Logo} alt="" />
                </div>

            </div>
                    <div className={`links ${IsActive ? "active" : ""}`}>
                <ul>
                    <li>
                         <Link to="/home" onClick={() => window.scrollTo(0, 0)}>Home</Link>



                    </li>
                    <li>
                                                  <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>Shop</Link>


                    </li>
                    <li>
                                                  <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>

                    </li>
                    <li>
                                                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>

                    </li>
                    <li>
                                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact </Link>
                    </li>
                    <li>
                             <Link to="/login" >Login </Link>

                    </li>
                    <li>
                        <Link to="/allitem"><i class="fa-solid fa-bag-shopping shop"></i> </Link>
                    </li>
                    
                </ul>

            </div>
            <div className="toggle" >
                <div className="icon" onClick={()=>setactive(!IsActive)}>
                        <i className={`${IsActive ? "fa-solid fa-x" : "fa-solid fa-bars"}`}></i>
                </div>
            </div>

        </div>
        </>

    )
}
export default  Navbar