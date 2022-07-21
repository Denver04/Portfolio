import React , {useEffect} from 'react';
import "../form.css";
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css"

function Achieve() {
    useEffect(()=>{
        Aos.init({duration:1000});
      } , [])

  return (
    <div className='achieve'>
        <div className='achieve-head'>
            <h1>Achievements</h1>
        </div>
        <div className='achieve-card' data-aos="zoom-in">
            <h4>Alecado System (internship)</h4>
            <p>Was the one of the main front-end developer for the company.
            We built the website <a href='https://aiverse.netlify.app' target="_blank">Site</a> for the company.
                Learn to work with colleagues / manager.
                Discussing things in meet with manager was the best thing.</p>
            <p style={{fontWeight:"lighter"}}>May 2021 - June 2021</p>
        </div>
        <div>
            <h6>Rest is still loading ....</h6>
        </div>
        
    </div>
  )
}

export default Achieve