import style from '../css/ModalTest.module.css';


const detailPics = [

]

const ModalTest = () => {
  return ( 
    <div className={style.detailsModalWrapper}>
      <div className="modal-content" id="ModalTest">
        <div className="modal-body">
          <div className="modalSlides">
            <div className="row" id="gallery">
              <div className="col-12 col-sm-6 col-lg-3"><img className="w-100 h-100" src="../assets/app-components/discount-detail/chevy-front.jpg" onClick="openModal(); currentSlide(1)"  alt="chevy-detail" ></img></div>
              <div className="col-12 col-sm-6 col-lg-3"><img className="w-100 h-100" src="../assets/app-components/discount-detail/chevy-rear.jpg" onClick="openModal(); currentSlide(2)" alt="chevy-detail" ></img></div>
              <div className="col-12 col-sm-6 col-lg-3"><img className="w-100 h-100" src="../assets/app-components/discount-detail/chevy-interior.jpg" onClick="openModal(); currentSlide(3)" alt="chevy-detail" ></img></div>
            </div>
            <div className="modal-footer ">
              <h4>This is the Modal Title</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ModalTest;