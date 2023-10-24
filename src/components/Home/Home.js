import './Home.css';
import React, { useState, useEffect } from 'react';
import PartyInfo from './PartyInfo/PartyInfo';

/*ICONS*/

import { CiMenuBurger } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import {PiHouseBold} from "react-icons/pi";
import {GoSearch} from "react-icons/go";
import {HiOutlineViewGridAdd} from "react-icons/hi";
import {IoIosAddCircle} from "react-icons/io";


const eventDataFromDatabase = [

  {
    carouselImages: ["https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"],
    hostImage: 'https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart',
    hostName: 'Paoutxu',
    eventName: 'Disco Party on Big House',
    location: 'Party in Spain, Barcelona',
    date: '30/10/23 - 21:30',
    theme: 'Hallowen Party',
    musicType: 'Pop, Rap',
    aforation: '5 / 15',
    ageRange: '18-25',
    description: 'Join us at the South Beach party of the year! You can expect a beachfront venue, DJ music, cocktails, sunset views, fire dancers, a glow party, VIP lounges, beach games, gourmet food, surprise performances, and plenty of Instagram-worthy moments. Get ready to have a blast under the South Beach sun!',
  },
  {
    carouselImages: ["https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"],
    hostImage: 'https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart',
    hostName: 'Paoutxu',
    eventName: 'Disco Party on Big House',
    location: 'Party in Spain, Barcelona',
    date: '30/10/23 - 21:30',
    theme: 'Hallowen Party',
    musicType: 'Pop, Rap',
    aforation: '5 / 15',
    ageRange: '18-25',
    description: 'Join us at the South Beach party of the year! You can expect a beachfront venue, DJ music, cocktails, sunset views, fire dancers, a glow party, VIP lounges, beach games, gourmet food, surprise performances, and plenty of Instagram-worthy moments. Get ready to have a blast under the South Beach sun!',
  },
  


];


const Home = () => {


    return(
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
        <div className="parties">
          {eventDataFromDatabase.map((eventData, index) => (
            <PartyInfo key={index} data={eventData} />
          ))}
        </div>

        </main>
      </div>

    );
};

export default Home;