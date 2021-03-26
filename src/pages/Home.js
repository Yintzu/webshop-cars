import CarList from '../components/CarList';
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