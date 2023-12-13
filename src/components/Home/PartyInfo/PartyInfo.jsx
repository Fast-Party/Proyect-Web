import React from 'react';
import './PartyInfo.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PartyInfo = ({ data }) => {

const {Images, hostImage, hostName, eventName, location, date, theme, musicType, aforation, ageRange, description } = data;

/*

function ImageCarousel({ images }) {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </Slider>
    );
  }
*/

/*<ImageCarousel images={Images} className='carouelImg' />*/

  return (
    <div className="main-content">
      <img src={Images} alt="Party Image" className="imgParty" />
      <div className="divider"></div>   
      <div className="infoParty">
        <div className='userPartyInfo'>
          <img className='imgProfileUser' src={hostImage} alt='Profile Image Host Party'></img>
          <span className='nameUser'>{hostName}</span>
          <button className='btnJoin'><span>JOIN</span></button>
        </div>
        <div className='partyInfo'>
          <h2>{eventName}</h2>
          <hr />
          <div className='divPInfo'>
            <p>{location}</p>
            <p>Date: {date}</p>
          </div>
          <div className='divPInfo'>
            <p>Theme: {theme}</p>
            <p>Type of Music: {musicType}</p>
          </div>
          <div className='divPInfo'>
            <p>Aforation: {aforation}</p>
            <p>Age Range: {ageRange}</p>
          </div>
          <div className='descriptionParty'>
            <h4>Description:</h4>
            <hr />
            <div className='containerDescription'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInfo;
