import style from '../css/Home.module.css';
import CarList from '../components/CarList';
import Carousel from '../components/discountCarousel';

const Home = () => {
    return ( 
        <div>
            On home
            <Carousel/>
            <CarList />
        </div>
     );
}
 
export default Home;