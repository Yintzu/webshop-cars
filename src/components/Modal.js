import React from 'react'
import style from "../css/LoginModal.module.css"

const Modal = props => {
  if (!props.show) {
    return null
  }

  const closeModal = (e) => {
    if (e.target.id === "modalBackground" || e.target.classList.contains("closeButton")) {
        props.setShowLoginModal(false)
    }
  }

  return (
    
    
      <div className={`${style.cover}`} id="modal" onClick={closeModal}>
        <div className={`${style.loginDiv}`}>
                <div className={`${style.closeButton} closeButton`}>
                    <div className={`${style.xbar1} closeButton`}></div>
                    <div className={`${style.xbar2} closeButton`}></div>
                </div>
        <div className="modal-content">
          <div className="modal-body">
            <div className="container">
              {<div>Pretty Images</div>}
            </div>
           This is modal pictures content{}
          </div>
          <div className="modal-footer">
            <h4 className="modal-title">{}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

// function DetailsModal()   {
//   const [show, setShow] = useState(false)

//   return (
//       <div className="Modal">
//           <button onClick={() => setShow(true) }>Show Modal</button>
//           <Modal onClose={() => setShow(false)} show={show} />
//       </div>
//   )
// }