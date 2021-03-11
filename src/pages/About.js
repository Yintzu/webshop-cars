import style from '../css/About.module.css';


const About = () => {
  
  const link1 = 'Who are we?';
  const link2 = 'How we deliver';
  const link3 = 'Environmental Impact?';
  const title = 'About us';

    return ( 
    <div>
      <div className="about-menu">

        <div className="link1">
          <p>{ link1 }</p>
        </div>
  

        <div className="link2">
          <p>{ link2 }</p>
        </div>

        <div className="link3">
           <p>{ link3 }</p>
        </div>
      </div>
 

      <div className="page-title">
        <h1>{ title }</h1>
      </div>
    
      <div className="info">
        <p>Quality car retailer of Sweden</p>

        <p>With an extensive range of approved used cars featuring all makes and models, Richard Ryan's Reliable Rides can provide the right car at the right price. With so much choice why go anywhere else? Get the best prices and widest choice on quality used cars in Sweden, contact us today!</p>

        <p>Who are we?</p>
        <p>How we deliver</p>
        <p>Our environmental impact.</p>
            
        <p>Find your dream car today!</p>
      </div>
    </div>
   );
  }

export default About;