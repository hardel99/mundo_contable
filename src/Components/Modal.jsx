import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, children }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={`modal ${isOpen && 'modalOpen'}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
        <button className="close-modal-btn" onClick={closeModal} >X</button>
        <h1 className="title-modal">Mundo Contable</h1>

        <div className="scroll-div">

          <div className="banner-container"/>
         
          <p className="pmodal">
            Creada con el fin de contribuir en el desarrollo  contable, administrativo y Legal,  para muchos
            jóvenes profesionales emprendedores, que  debido a las  diferentes limitaciones se les dificulta
            emprender y empezar a ofrecer sus  servicios profesionales.
          </p>

          <p className="pmodal">
            Es el inicio para empezar a hacerte de tu propia cartera de clientes.
          </p>

          <p className="pmodal">
            En una economía globalizada los profesionales que logren trascender en los cambios son los que
            más se adaptan y llegan primero a cubrir las necesidades futuras de las empresas.
          </p>

          <p className="pmodal">
            Sabemos de los profesionales que creen en sí mismos más que en una empresa y logran ofrecer un servicio
            integral, con el propósito de focalizar los recursos de su negocio.
          </p>

          <p className="pmodal">
            Apuéstale a tu libertad Financiera, ya que estamos conscientes que  de tu crecimiento depende de
            nosotros como empresa, estaremos  contigo desde el inicio hasta el momento que tus expectativas
            superen lo que se te ofrece y logres crear tu propia empresa y te asesoraremos para ello.
          </p>

          {children}
        </div>

      </div>

    </div>
  )
}

export default Modal
