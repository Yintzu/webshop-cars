import style from "../css/DetailsModal.module.css"


const DetailsModal = (props) => { 

  
  return (
    
    <div className={style.detailsModalWrapper} onClick={ () => props.setShowModal(false)}>
      <div className={style.imageWrapper}>
        <img src={props.imgPath} alt="details pic"></img>
      </div>
    </div>
  )
}

export default DetailsModal