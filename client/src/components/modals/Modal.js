import React from 'react'
import './Modal.css'
const Modal = (props) => {
  return (
    <div className="modal" style={{ display: props.show ? 'block' : 'none' }}>
      <div className="modal-content">
      <div className='offer' onClick={props.onClose}>  
      <p className='main-content'>WELCOME</p>
      <p className='offer-content'>Get up to ₹100 off</p>
      <p className='offer-description'>Use code WELCOME & get 50% off upto  Maximum discount of ₹100 on orders above ₹499</p>
      <button className='offer-btn'>Apply offer</button>
       </div>
      <div>
      <span className="close" onClick={props.onClose}>&times;</span>
      </div>
      </div>
    </div>
  )
}

export default Modal
