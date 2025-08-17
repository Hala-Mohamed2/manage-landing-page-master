import './About.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";





const About = () => {
  return(
    <section className='about' id='about'>
      <h1>What they’ve said</h1>
      <div className="about-us">
        <Swiper className="mySwiper"
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {        // الموبايل
              slidesPerView: 1,
            },
            768: {      // التابلت
              slidesPerView: 2,
            },
            1024: {     // الديسكتوب
              slidesPerView: 3,
            },
          }}
          >
          <SwiperSlide>
            <img src="./images/avatar-anisha.png" alt="" />
            <h2>Anisha Li</h2>
            <p>“Manage has supercharged our team’s workflow. The ability to maintain 
            visibility on larger milestones at all times keeps everyone motivated.”</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/avatar-ali.png" alt="" />
            <h2>Ali Bravo</h2>
            <p>“We have been able to cancel so many other subscriptions since using 
            Manage. There is no more cross-channel confusion and everyone is much 
            more focused.”</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/avatar-richard.png" alt="" />
            <h2>Richard Watts</h2>
            <p>“Manage allows us to provide structure and process. It keeps us organized 
            and focused. I can’t stop recommending them to everyone I talk to!”</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/avatar-shanai.png" alt="" />
            <h2>Shanai Gough</h2>
            <p>“Their software allows us to track, manage and collaborate on our projects 
            from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="btns">
        <button className='btn'>Get Started</button>
      </div>
    </section>
  )
}



export default About;