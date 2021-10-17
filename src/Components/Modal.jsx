import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, children }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={`modal ${isOpen && 'modalOpen'}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
        <button className="close-modal-btn" onClick={closeModal} >X</button>
        <h1 className="title-modal"> {title} </h1>
        {children}
      </div>

    </div>
  )
}

export default Modal
