import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginBtn from "../LoginBtn/LoginBtn";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

import './styles.css';

import { IconContext } from "react-icons";
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {

  const { isAuthenticated } = useAuth0();   // no logro hacerlo funcionar asi que 
  // voy a estar usando el useState y el clickeo de boton
  const [isLoged, setIsLoged] = useState(false);




  const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");

  const HandleMobileMenu = () => {
      if (showMobileMenu == "mobileMenuOff") {
        setShowMobileMenu("mobileMenuOn");
      } else {
          setShowMobileMenu("mobileMenuOff");
      }
  };

  return (
    <>

        <main className='Nav'>
            <div className="wrapper">
                <div className="logo">
                    <Link className="logoTitle" to="/hacklist">Hackathon Ranking</Link>
                </div>           
                {showMobileMenu === "mobileMenuOff" 
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }
                <ul className={showMobileMenu} >
                    <li className="menuItem" >
                        <Link className="menuItemLink" onClick={HandleMobileMenu} to="/hacklist">
                            All Hackathons
                        </Link>
                    </li>
                    <li className="menuItem" >
                        <Link className="menuItemLink" onClick={HandleMobileMenu} to='/top-developers'>
                            Top Developers
                        </Link>
                    </li>
                    <li className="menuBtn" onClick={HandleMobileMenu}>
                        {/*
                        {isLoged ? <LogoutBtn /> : <LoginBtn onClick={() => setIsLoged(!isLoged)}/> }
                        <LogoutBtn />
                        */}
                        {isAuthenticated ? <LogoutBtn /> : <LoginBtn />}
                        <LogoutBtn />
                        
                    </li>
                </ul>
            </div>
        </main>
    </>
  );
};

export default Nav;