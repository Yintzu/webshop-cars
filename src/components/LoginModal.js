import style from "../css/LoginModal.module.css"

const LoginModal = (props) => {
    return ( 
        <div className={style.cover} onClick={()=>props.setShowLoginModal(false)}>

        </div>
     );
}
 
export default LoginModal;