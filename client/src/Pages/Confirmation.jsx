import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../App.css';

function Confirmation() {
  const [goToSignIn, setGoToSignIn] = useState(false);
  const [ currentUser ] = useContext(AuthContext);

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
      <form className='confirmation-form-container'>
        <h1 className='ThankYouTitle'>Thank you, {currentUser?.points}</h1>
        <p>You'll receive a confirmation soon.</p>
        <form className='inner-form-contianer'>

        </form>
      </form>
    </>
  )
}

export default Confirmation