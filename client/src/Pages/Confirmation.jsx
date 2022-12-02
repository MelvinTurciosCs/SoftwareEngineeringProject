import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../App.css';

function Confirmation() {
  const { currentUser } = useContext(AuthContext);
  const [goToSignIn, setGoToSignIn] = useState(false);
  
  if(goToSignIn){
    return <Navigate to="/Login"/>;
  }

  return (
    <section>
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
      <div className='Confirmation-content'>
        <h1>Thank you, {currentUser?.points}</h1>
        <p>You'll receive a confirmation soon.</p>
      <form className='Confirmation-form-container'>
        <h3 className='Date-confirmation'>Date: </h3>
        <h3 className='Time-confirmation'>Time: </h3>
        <h3>test info</h3> 
      </form>
        <h3>Hello World</h3>
      </div>

    </section>
  )
}

export default Confirmation