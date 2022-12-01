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
              Would you like to continue as a Guest or would you like to make an account?
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
    </>
  )
};

export default Modal