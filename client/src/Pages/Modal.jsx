import React from 'react';
import styles from "./Modal.css";
import { Navigate } from 'react-router-dom';
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  const [goToReservationPage, setGoToReservationPage] = React.useState(false);

  const [goToSignIn, setGoToSignIn] = React.useState(false);

  if(goToReservationPage){
    return <Navigate to="/GuestReserve"/>;
  }

  if(goToSignIn){
    return <Navigate to="/Login"/>;
  }

  return (
    <>
      <form className='modal-container'>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className="heading">Guest Reservation</h5>
              </div>
              <button className="closeBtn" onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
              <div className="modalContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
              <div className="modalActions">
                <div className="actionsContainer">
                  <button className="GuestBtn" onClick={() => setGoToReservationPage(true)}>
                    Continue as Guest
                  </button>
                  <button
                    className="SignInBtn"
                    onClick={() => setGoToSignIn(true)}>
                    Sign In
                  </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
};

export default Modal