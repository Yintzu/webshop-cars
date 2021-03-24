import style from "../css/DetailsModal.module.css"


const DetailsModal = (props) => { 

  
  return (
    
    <div className={style.detailsModalWrapper} onClick={ () => props.setShowModal(false)}>
        <img className={style.img} src={props.imgPath} alt="details pic"></img>
    </div>
  )
}

export default DetailsModal