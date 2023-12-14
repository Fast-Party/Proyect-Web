import React from 'react';
import './PartyInfo.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PartyInfo = ({ data }) => {

const {pImage, uImage, author, title, country, state, city, date_time, theme, music_type, min_age, max_age, max_capacity, description } = data;




// Crear un objeto Date a partir de la cadena de fecha
const fecha = new Date(date_time);

// Obtener los componentes de la fecha (día, mes, año)
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
const año = fecha.getFullYear();

// Formatear la fecha como "dd/mm/yyyy"
const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;

const optionsHora = { hour: "2-digit", minute: "2-digit"};
const horaFormateada = fecha.toLocaleTimeString("es-ES", optionsHora);




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
      <img src={pImage ? pImage : 'https://wallpapercave.com/wp/wp2646803.jpg'} alt="Party Image" className="imgParty" />
      <div className="divider"></div>   
      <div className="infoParty">
        <div className='userPartyInfo'>
          <img className='imgProfileUser' src={uImage ? uImage : 'https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart'} alt='Profile Image Host Party'></img>
          <span className='nameUser'>{author}</span>
          <button className='btnJoin'><span>JOIN</span></button>
        </div>
        <div className='partyInfo'>
          <h2>{title}</h2>
          <hr />
          <div className='divPInfo'>
            <p>{country}, {state}, {city}</p>
            <p>Date: {fechaFormateada} - {horaFormateada}</p>
          </div>
          <div className='divPInfo'>
            <p>Theme: {theme}</p>
            <p>Type of Music: {music_type}</p>
          </div>
          <div className='divPInfo'>
            <p>Aforation: {max_capacity}</p>
            <p>Age Range: {min_age} / {max_age}</p>
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
