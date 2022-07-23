import React , {useEffect} from 'react';
import "../index.css";
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import Resume from "../images/Resume.pdf";
import Typewriter from 'typewriter-effect';

function Middle() {
  useEffect(()=>{
    Aos.init({duration:3000});
  } , [])
  return (
    <div className='middle-main'>
        <div className='middle'>
            <div style={{color:"orange" , fontSize:'70px'}} data-aos="fade-right">Hello !</div>
            <h1 data-aos="fade-left"><span>
            <Typewriter
            options={{
            strings: [`I'm Abhisek kumar Singh`, `I'm a Front-end Developer`],
            autoStart: true,
            pauseFor:400,
            cursor:"_",
            deleteSpeed:120,
            loop: true,
            }} /></span></h1>
            <p data-aos="zoom-in">I'm a front-end web developer. Currently , I'm studying in AIT, Pune from Computer Engr branch.</p>
        </div>
        <div className='icons' data-aos="fade-right">
            <a href="https://www.instagram.com/denver_d_deniver/" ><i class="fa-brands fa-instagram-square" ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100009848738409" ><i class="fa-brands fa-facebook-square" ></i></a>
            {/* <i class="fa-brands fa-discord"></i> */}
            <a href="https://github.com/Denver04" ><i class="fa-brands fa-github-square" ></i></a>
            <a href="https://www.linkedin.com/in/denver-abhisek-088592217/"><i class="fa-brands fa-linkedin" ></i></a>
        </div>
        <div className='info' data-aos="fade-right">
          <i class="fa-solid fa-phone"></i><div>8875209080</div>
        </div>
        <div className='info' data-aos="fade-left">
          <i class="fa-solid fa-envelope"></i> <div>abhisekkumarsingh021@gmail.com</div>
        </div>
        <div className='info' data-aos="fade-left">
        <i class="fa-brands fa-discord"></i><div>Denver#2229</div>
        </div>
        <div className='info1' data-aos="fade-right">
         <a href={Resume} download className='resume'> Download Resume</a>
        </div>
    </div>
  )
}

export default Middle
