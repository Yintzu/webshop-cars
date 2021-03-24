import style from "../css/DetailsModal.module.css"


const DetailsModal = (props) => { 

  
  return (
    
    <div className={style.detailsModalWrapper} onClick={ () => props.setShowModal(false)}>
      <div className={style.imageWrapper}>
        
      </div>
    </div>
  )
}

export default DetailsModal