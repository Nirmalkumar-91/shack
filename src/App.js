import './App.css';
import Header from './components/Header'
import { useState } from 'react';
import Services from './components/Services';
import Menus from './components/Menus';
import Partners from './components/Partners';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import CreaterLink from './components/CreaterLink';

function App() {
  let bkg1 = {
    backgroundImage: 'url(images/wave-shape/wave1.png)',
  };
  let bkg2 = {
    backgroundImage: 'url(images/wave-shape/wave2.png)',
  };
  let bkg3 = {
    backgroundImage: 'url(images/wave-shape/wave3.png)',
  };

  const [restaurentName, setRestaurentName] = useState('Shacks')
  
  const handleResDetails = (val) => {
    val === 'Shacks' ? setRestaurentName('Flavours of Nellai') : setRestaurentName('Shacks');
  }

  return (
    <div className="App">
      <Header restaurentName = {restaurentName} passResDetail = {handleResDetails} ></Header>
      <section className= {restaurentName === 'Shacks'? 'section bg-home home-half' : 'section bg-home2 home-half'} id="home" data-image-src="images/home.jpg">
        <div className="bg-overlay"></div>
        <div className="display-table">
            <div className="display-table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                            <h1 className="home-title">{restaurentName}</h1>
                            <p className="padding-t-15 home-desc">Some Desc about {restaurentName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
                <div className="wave wave-one" style={bkg1}></div>
            </div>
            <div className="waves-shape shape-two">
                <div className="wave wave-two" style={bkg2}></div>
            </div>
            <div className="waves-shape shape-three">
                <div className="wave wave-three" style={bkg3}></div>
            </div>
        </div>
      </section>

      {/* Service Section */}
      <Services></Services>

      {/* Menus Section */}
      <Menus restaurentName = {restaurentName}></Menus>

      {/* Partners Section */}
      <Partners></Partners>
      
      {/* Blogs Section */}
      <Blogs restaurentName = {restaurentName}></Blogs>

      {/* ContactUs Section */}
      <ContactUs></ContactUs>

      {/* SocialMedia Section */}
      <SocialMedia></SocialMedia>

      {/* Footer Section */}
      <Footer restaurentName={restaurentName}></Footer>

      {/* CreaterLink Section */}
      <CreaterLink></CreaterLink>
    </div>
  );
}

export default App;
