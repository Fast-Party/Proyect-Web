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
    Images: ["https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?cs=srgb&dl=pexels-edoardo-tommasini-3249760.jpg&fm=jpg","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"],
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
    Images: ["https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/0458/edbd/c3c0f6ddce4f0749daa3b7764892f0b0?Expires=1698624000&Signature=UdzY8Xfoh9M-GiOfUdCdKLuhgQmYRF2W2Skidj2BQY8tzQGy0ppa1aOfjCStxDkycbQl4d8g3oUyE~umRbJQgrKXLyBRFUWjBcLp-ZMI071AFiO6j-aN3nlT9KWpC7sZNWSxBYrOUz9Fy66gnO~y7YwxKSYgTQkUGXLbN14HNkbv5mnXhJXfBA8Ke3q0AOt8yjtw4TKsaWzngV26EAWOuP5jx0cnYXuJHmjTrIqtcHQ5QGScc9b4gM4e1bhWloGUY2hpBFK25TUTGdMSG08SiiqWxzogtgMEghhkHXp35gKCs76V90q1vBTlkoJvOylOGxd82G3Or14q8CQ--XAy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"],
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

const eventDataFromDatabase2 = [

  {
    Images: "https://wallpapersmug.com/download/3840x2160/0f9d89/rock_music_concert_dance_party.jpg",
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
    Images: "https://wallpapercave.com/wp/wp2646803.jpg",
    hostImage: 'https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart',
    hostName: 'Alb3rt',
    eventName: 'Night Pool Party',
    location: 'Party in Spain, Barcelona',
    date: '11/11/23 - 23:00',
    theme: 'Pool Party',
    musicType: 'Pop, Regeton',
    aforation: '5 / 30',
    ageRange: '18-35',
    description: 'Get ready to immerse yourself in the ultimate fun! Join us for an exciting party at a luxurious pool house that will take your breath away. This dream home features a stunning pool surrounded by lush tropical gardens and comfortable sun loungers to relax in the sun. While you cool off in the pool, you can enjoy live music by a renowned DJ who will set the perfect atmosphere with the hottest rhythms.',
  },
  {
    Images: "https://papers.co/wallpaper/papers.co-nr21-party-club-dance-night-nature-music-35-3840x2160-4k-wallpaper.jpg",
    hostImage: 'https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart',
    hostName: 'DLNX8',
    eventName: 'Golden Party',
    location: 'Party in Spain, Barcelona',
    date: '24/12/23 - 22:30',
    theme: 'Christmas Party',
    musicType: 'Pop, Regeton',
    aforation: '5 / 50',
    ageRange: '18-45',
    description: 'Join the dazzling "Golden Party" in Barcelona, a unique experience in a dream location. With vibrant pop and reggaeton music, this Christmas party will take place on December 24 at 10:30 p.m. The "Christmas Party" theme promises festive decorations and the Christmas spirit. With a capacity for 50 people and a capacity of 5/50, you will enjoy an intimate but exciting atmosphere. Open to ages 18 to 45, this event promises to be a golden night full of fun and elegance. Don´t miss your chance to shine at the "Golden Party" and create unforgettable memories this Christmas!',
  }
  
];

const Home = () => {

  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const handleMenuClick = () => {
      setIsSidebarHidden((prev) => !prev);
  };

    return(
        <div className="app-container">
        <header className="Home-header">
          <div className="left-icons">
            <CiMenuBurger className='icon_menu' onClick={handleMenuClick} />
          </div>
  
          <h1>FAST PARTY</h1>
          
          <div className="right-icons">
            <GoBell className='icon_bell' />
            <PiUserCircleFill className='icon_user' />
          </div>
        </header>
        <div className='screen'>
        <div className={`sidebar ${isSidebarHidden ? 'hideSidebar' : ''}`}>
            <nav>
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <div className="icon-with-name">
                      <PiHouseBold className='homebtn'/>
                      <span className="icon-name">HOME</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon-with-name">
                      <GoSearch className='searchbtn' />
                      <span className="icon-name">SEARCH</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon-with-name">
                      <HiOutlineViewGridAdd className='joinbtn' />
                      <span className="icon-name">JOINED PARTIES</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="btnCircle">
                      <IoIosAddCircle className='addCircle' />
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <main className="main">
            <div className="parties">
              {/*Cambiar el index por un identificador de la fiesta*/}
              {eventDataFromDatabase2.map((eventData, index) => (
                <PartyInfo key={index} data={eventData} />
              ))}
            </div>
          </main>
        </div>
      </div>

    );
};

export default Home;