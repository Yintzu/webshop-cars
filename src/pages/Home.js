import style from '../css/Home.module.css';
import CarList from '../components/CarList';
import Carousel from '../components/DiscountCarousel';
import Search from '../components/Search';

const Home = () => {
    return ( 
        <div className="homepage">
            <Search />
            <CarList />
        </div>
     );
}
 
export default Home;