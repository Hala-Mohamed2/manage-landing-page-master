import { useState } from 'react';
import './Header.css';


const Header = () => {

  const [show, setShow] = useState(false);



  return(
    <header className="header">
      <div className="head">
        <div className="humburger">
        <img src="./images/logo.svg" alt="" />
        <div className="ico" onClick={()=> setShow(!show)}>
          <img className={`humb ${!show ? "active" : ""}`} src="./images/icon-hamburger.svg" alt="" />
          <img className={`humb ${show ? "active" : ""}`} src="./images/icon-close.svg" alt="" />
        </div>
      </div>
      <div className="links" >
        <a href="Pricing">Pricing</a>
        <a href="Product">Product</a>
        <a href="About">About Us</a>
        <a href="Careers">Careers</a>
        <a href="Community">Community</a>
      </div>
      <button className='btn btn-head'>Get Started</button>
      </div>
      {show && (
        <div className="flex">
          <a href="Pricing">Pricing</a>
          <a href="Product">Product</a>
          <a href="About">About Us</a>
          <a href="Careers">Careers</a>
          <a href="Community">Community</a>
        </div>
      )}
    </header>
  )
}



export default Header;