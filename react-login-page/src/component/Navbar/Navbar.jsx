import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { IconContext } from 'react-icons';
import { SidebarData } from '../SidebarData';
import navlogo from "../../asset/White-Red.png";
import { useNavigate } from "react-router-dom";

import { BrowserRouter as Router, NavLink } from "react-router-dom";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  const homeRoute = () => {
    navigate("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

            <div className="logo">
              <a onClick={homeRoute}>
                
                {" "}
                <img className="logoImg" src={navlogo} alt="logo" />
              </a>{" "}

            </div>
            <nav class="page-header__bottom">
              <ul id="navigation" class="navigation">
                <li class="navigation__item">
                  {" "}
                  <NavLink to="/">Home</NavLink>
                </li>

                <li class="navigation__item">
                  {" "}
                  <NavLink className="wert" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="navigation__item">
                  {" "}
                  <NavLink className="wert" to="/about">
                    Gallery
                  </NavLink>
                </li>
                <li class="navigation__item">
                  {" "}
                  <NavLink className="wert" to="/about">
                    Dashboard
                  </NavLink>
                </li>
                <li class="navigation__item">
                  {" "}
                  <NavLink className="wert" to="/about">
                   Awards
                  </NavLink>
                </li>
                <li class="navigation__item">
                  {" "}
                  <NavLink className="wert" to="/about">
                  Help
                  </NavLink>
                </li>
                <li class="navigation__item">
                  <NavLink to="/login">Logout</NavLink>
                </li>
              </ul>
            </nav>
           
        </div>
       
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} 
          </ul>
        </nav>
      </IconContext.Provider>
       
    </>
  );
}

export default Navbar;
