import { useLocation } from 'react-router';
import style from '../css/About.module.css';
// import Search from '../src/components/Search.js';


const About = () => {

  const link1 = 'Who are we?';
  const link2 = 'How do we deliver?';
  const link3 = 'Environmental Impact?';
  const title = 'About us';
  const title1 = 'Who are we?';
  const title2 = 'How do we deliver?';
  const title3 = 'Environmental Impact';

    return ( 
   
      <div className="container">
              
        <div className="menu">
          <div className="row">
            <div className="links">
              <div>
                <a href="#section1">{ link1 }</a>

                <a href="#section2">{ link2 }</a>

                <a href="#section3">{ link3 }</a>

              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="section">{ title }</h1>
        </div>

        <div className="text">
          <p>Quality car retailer of Sweden</p>
        

          <p>With an extensive range of approved used cars featuring all makes and models, Richard Ryan's Reliable Rides can provide the right car at the right price. With so much choice why go anywhere else? Get the best prices and widest choice on quality used cars in Sweden, contact us today!</p>
        </div>

          <div className="section1">
            <h1>{ title1 }</h1>
          </div>

          <div className="text">
            <p>Nulla facilisi. Aenean rutrum tortor nec sem commodo faucibus. Vestibulum nunc erat, vestibulum vitae eros et, mollis placerat purus. Quisque consectetur pellentesque metus, non dictum elit placerat vel. Aenean iaculis tincidunt orci, in scelerisque velit porta vitae. Vivamus et malesuada mauris. Proin ligula magna, lacinia quis euismod in, vehicula nec turpis. Aenean tempus fermentum felis nec interdum. Praesent eu accumsan ex, sed pulvinar urna. Mauris sit amet lectus a nulla egestas feugiat eu nec justo. </p>
          </div>

          <div className="section2">
            <h1>{ title2 }</h1>
          </div>

          <div className="text">
            <p>Proin nec urna sed tellus fringilla mattis. Aenean scelerisque tortor ut felis imperdiet elementum. Nunc a euismod dolor. Aliquam gravida erat nec feugiat vulputate. Donec in nunc sollicitudin, tempor nibh eu, ultricies magna. Mauris massa justo, hendrerit a accumsan a, convallis eleifend felis. Praesent elit ipsum, lacinia et justo nec, tincidunt maximus risus. Duis ligula nibh, eleifend ornare iaculis nec, pretium et nunc. In facilisis, nulla sed ullamcorper tempor, orci augue interdum sapien, vel fringilla sem turpis vitae lacus. Sed eget iaculis mi, vitae suscipit lorem. </p>
          </div>

          <div className="section3">
            <h1>{ title3 }</h1>
          </div>

          <div className="text">
            <p>Nullam pulvinar tellus rhoncus sapien dignissim, quis mattis dui vestibulum. Pellentesque auctor massa efficitur est tincidunt aliquam. In tincidunt leo non enim faucibus lacinia. Maecenas suscipit malesuada consectetur. Pellentesque posuere, sem in volutpat vulputate, metus purus venenatis sem, ac imperdiet turpis nibh in diam. Phasellus eget consequat nunc, quis ornare sem. Aenean quis velit sed sapien tempus auctor. Nunc ac libero risus. Vivamus condimentum lectus in est semper, id suscipit nunc mollis. </p>

            <p>Sed non suscipit tellus, non viverra dolor. Vivamus varius mi convallis, ornare ex vel, egestas ligula. Pellentesque ac risus at arcu feugiat luctus a a ligula. Nunc commodo pulvinar ante id pulvinar. Nulla venenatis aliquam neque. Vestibulum eu erat varius, dignissim magna porta, iaculis augue. Sed aliquet sit amet sem id aliquet. Donec sed suscipit velit. Pellentesque vel varius dui, quis suscipit velit. Mauris scelerisque, velit et feugiat rhoncus, urna sapien convallis ante, sit amet imperdiet tellus metus ac enim. Nunc sed facilisis mi. 
          </p>
            
            <p>Find your dream car today!</p>

        </div>
      </div>
  
   );
  }

export default About;