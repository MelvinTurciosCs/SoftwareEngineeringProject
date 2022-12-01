import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import { Navigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import Modal from "./Modal";


SwiperCore.use([Autoplay]);

export default function LandingPage() {
  const [goToSignIn, setGoToSignIn] = React.useState(false);
  const [goToReservationPage, setGoToReservationPage] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  if(goToSignIn){
    return <Navigate to="/Login"/>;
  }

  if(goToReservationPage){
    return <Navigate to="/GuestReserve"/>;
  }

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
       modules={[Autoplay]}
       className="mySwiper"
      >
        <SwiperSlide><img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img></SwiperSlide>
        <SwiperSlide><img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img></SwiperSlide>
        <SwiperSlide><img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img></SwiperSlide>
        <SwiperSlide><img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img></SwiperSlide>
      </Swiper>
      <div className='TopBar'>
        <header>
          <ul className='nav'>
            <img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>Points</a></li>
            <li><a href='/#'>Catering</a></li>
            <li><a href='/#'>Contact</a></li>
            <button className='MakeReservation' onClick={() => setIsOpen2(true)}>Make Reservation</button>
            {isOpen2 && <Modal setIsOpen={setIsOpen2} />}
            <button className='SignIn'  onClick={() => setGoToSignIn(true)}>Sign In</button>
          </ul>
        </header>
      </div>
      <div className='content'>
        <div className='textBox'>
          <h1>Welcome To Restaurant Reserve </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='MakeReservation' onClick={() => setIsOpen(true)}>Make Reservation</button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
        <footer className='BottomBar'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <ul className='sci'>
            <li><a href='https://www.facebook.com/' className='fa fa-facebook'/></li>
            <li><a href='https://www.instagram.com/' className='fa fa-instagram'/></li>
            <li><a href='https://twitter.com/' className='fa fa-twitter'/></li>
          </ul>
        </footer>
      </div>
    </section>
  )
}

