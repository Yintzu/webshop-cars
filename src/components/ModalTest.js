import style from '../css/ModalTest.module.css';




const ModalTest = () => {
  return ( 
    <div className={style.detailsModalWrapper}>
      <div className="modal-content" id="ModalTest">
        <div className="modalSlides">
        <div className="modal-body">
          <div className="row">
            <div className="column">
            <img src="../assets/app-components/discount-detail/chevy-front.jpg" onClick="openModal(); currentSlide(1)" className="hover-shadow" alt="chevy-detail" height="50%" width="50%"></img>
            <img src="../assets/app-components/discount-detail/chevy-rear.jpg" onClick="openModal(); currentSlide(2)" className="hover-shadow" alt="chevy-detail" height="50%" width="50%"></img>
            <img src="../assets/app-components/discount-detail/chevy-interior.jpg" onClick="openModal(); currentSlide(3)" className="hover-shadow" alt="chevy-detail" height="50%" width="50%"></img>
          </div>

          
            <div className="modal-footer ">
              <h4>This is the Modal Title</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
   );
}
 
export default ModalTest;