import style from '../css/UserPage.module.css';
import BoughtCars from '../components/BoughtCars';

const UserPage = () => {
    return (
    <div className={style.userPage}>
        <BoughtCars />
    </div>
    );
}

export default UserPage;