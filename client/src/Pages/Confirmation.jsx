import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Confirmation() {
  const [goToSignIn, setGoToSignIn] = useState(false);

  if(goToSignIn){
    return <Navigate to="/Login"/>;
  }
  return (
    <>
      <div className='TopBar'>
        <header>
          <ul className='nav'>
            <img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>Points</a></li>
            <li><a href='/#'>Catering</a></li>
            <li><a href='/#'>Contact</a></li>
            <button className='SignIn' onClick={() => setGoToSignIn(true)}>Sign In</button>
          </ul>
        </header>
      </div>
    </>
  )
}

export default Confirmation