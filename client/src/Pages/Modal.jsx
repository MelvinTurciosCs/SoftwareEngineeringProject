import React from 'react';
import styles from "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
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
                <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                  Continue as Guest
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Modal