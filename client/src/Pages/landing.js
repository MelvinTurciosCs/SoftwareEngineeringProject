// Landing page for the website the first thing that's going to pop up
import React from 'react';
//Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
//Core modules imports are the same as usual
import SwiperCore, {Autoplay} from 'swiper';
// Route the buttons with Navigate
import { Navigate } from 'react-router-dom';

//Styles must use direct files imports
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

export default function LandingPage() {
  const [goToSignIn, setGoToSignIn] = React.useState(false);
  const [goToReservationPage, setGoToReservationPage] = React.useState(false);

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
          delay: 4000,
          disableOnInteraction: false,
        }}
       modules={[Autoplay]}
       className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className='TopBar'>
        <header>
          <ul className='nav'>
            <img src='./assets/logo-no-background.png' className='logo' alt='logo'></img>
            <li><a href='/landing'>Home</a></li>
            <li><a href='/#'>Points</a></li>
            <li><a href='/#'>Catering</a></li>
            <li><a href='/#'>Contact</a></li>
            <button className='MakeReservation'  onClick={() => setGoToReservationPage(true)}>Make Reservation</button>
            <button className='SignIn'  onClick={() => setGoToSignIn(true)}>Sign In</button>
          </ul>
        </header>
      </div>
      <div className='content'>
        <div className='textBox'>
          <h1>Welcome To NowReserve</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='MakeReservation' onClick={() => setGoToReservationPage(true)}>Make Reservation</button>
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

