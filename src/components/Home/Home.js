import './Home.css';
import React from 'react';

/*ICONS*/

import { CiMenuBurger } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import {PiHouseBold} from "react-icons/pi";
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
  
        <main className="main">
        <div className="sidebar"> 
          <div className="icon-with-name">
            <PiHouseBold className='homebtn'/>
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
          <img src="https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo" className="imgParty" />
          <div className="divider"></div>
          <div className="infoParty">
            <div className='userPartyInfo'>
              <img className='imgProfileUser'></img>
              <span className='nameUser'>User name</span>
              <button className='btnJoin'>JOIN</button>
            </div>
            <div className='partyInfo'>
              <h2>Party name</h2>
              <hr/>
              <p>Location</p>
              <p>Date</p>
              <p>Theme Party</p>
              <p>Type Music</p>
              <p>Aforation</p>
              <p>Age Range</p>
              <div className='descriptionParty'>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>

    );
};

export default Home;