import style from '../css/ModalTest.module.css';

// render () {
//   const {
//     onClick
//   } = 

//   return (
// }
// )

/*MOdal Markup: bootstrap component modal*/
const ModalTest = () => {
  return ( 
    <div className={style.detailsModalWrapper}>
      <div className="modal-content" id="ModalTest">
        <div className="modal-body">
            <div className="row" id="gallery" data-toggle="modal">

              <div className="col-12 col-sm-6 col-lg-3">
                <img className="d-block w-100 h-100" src="../assets/app-components/discount-detail/chevy-front.jpg"  alt="chevy-detail"></img>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <img className="d-block w-100 h-100" src="../assets/app-components/discount-detail/chevy-rear.jpg" alt="chevy-detail" ></img>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <img className="d-block w-100 h-100" src="../assets/app-components/discount-detail/chevy-interior.jpg" alt="chevy-detail" ></img>
              </div>

            </div>
            <div className="modal-footer">
              <h4>This is the Modal Title</h4>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default ModalTest;