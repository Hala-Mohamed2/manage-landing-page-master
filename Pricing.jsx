import './Pricing.css';

const Pricing = () => {
  return(
    <section className='container pricing' id='pricing'>
      <div className="sec-pric">
        <h2>Bring everyone together to build better products.</h2>
        <p>Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className='btn'>Get Started</button>
      </div>
      <img src="./images/illustration-intro.svg" alt="" />
    </section>
  )
}



export default Pricing;