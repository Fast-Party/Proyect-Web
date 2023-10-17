import './Home.css';
import React from 'react';

/*ICONS*/

import { CiMenuBurger } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import {LiaHomeSolid} from "react-icons/lia";
import {GoSearch} from "react-icons/go";
import {HiOutlineViewGridAdd} from "react-icons/hi";
import {IoIosAddCircle} from "react-icons/io";


const Home = () => {
    return (
        <div className="app-container">
        <header className="Home-header">
          <div className="left-icons">
            <CiMenuBurger className='icon_menu' />
          </div>
  
          <h1>FAST PARTY</h1>
          
          <div className="right-icons">
            <GoBell className='icon_bell' />
            <PiUserCircleFill className='icon_user' />
          </div>
        </header>
  
        <div className="sidebar"> 
          <div className="icon-with-name">
            <LiaHomeSolid className='homebtn'/>
            <span className="icon-name">HOME</span>
          </div>
  
          <div className="icon-with-name">
            <GoSearch className='searchbtn' />
            <span className="icon-name">SEARCH</span>
          </div>
  
          <div className="icon-with-name">
            <HiOutlineViewGridAdd className='joinbtn' />
            <span className="icon-name">JOINED PARTIES</span>
          </div>
  
            <div className="btnCircle">
              <IoIosAddCircle className='addCircle' />
            </div>

        </div>
  
        <div className="main-content">
          {/* Contenido principal de la página */}
          {/* Puedes agregar tus componentes y contenido principal aquí */}
        </div>
      </div>

    );
};

export default Home;