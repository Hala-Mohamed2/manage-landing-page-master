import './Footer.css';


const Footer = () => {
  return(
    <div className=" footer">
      <div className="foot">
        <img src="./images/logo.svg" alt="" />
        <div className="icons">
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-youtube.svg" alt="" />
          <img src="./images/icon-twitter.svg" alt="" />
          <img src="./images/icon-pinterest.svg" alt="" />
          <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </div>
      <div className="link">
        <a href="">Home</a>
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About Us</a>
      </div>
      <div className="link">
        <a href="">Careers</a>
        <a href="">Community</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="foott">
        <form >
          <input type="text" placeholder='Updates in your inbox...' />
          <button>Go</button>
        </form>
        <p>Copyright 2025. All Rights Reserved</p>
      </div>
    </div>
  )
}


export default Footer;