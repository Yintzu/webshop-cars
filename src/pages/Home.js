import style from '../css/Home.module.css';
import CarList from '../components/CarList';
import Carousel from '../components/discountCarousel';
import Search from '../components/Search';

const Home = () => {
    return ( 
        <div>
            <Carousel/>
            <Search />
            <CarList />
        </div>
     );
}
 
export default Home;