import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, children }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={`modal ${isOpen && 'modalOpen'}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
        <div className="modal_bar">
          <h1 className="title-modal"> {title} </h1>
          <button className="close-modal-btn" onClick={closeModal} >X</button>
        </div>
        
        {children}
      </div>

    </div>
  )
}

export default Modal
