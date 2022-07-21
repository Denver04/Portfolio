import React, { useEffect } from 'react';
import "../index.css";
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css"

function Skill() {
    useEffect(()=>{
        Aos.init({duration:2000});
    } , [])
  return (
    <div className='skill' >
        <div className='skill-head'>
            <h1>Skills</h1>
        </div>
        <div className='skill-part' data-aos="zoom-in">
            <div className='skill-box'>
                <h4>HTML</h4>
                <h6>Advanced</h6>
            </div>
            <div className='skill-box'>
                <h4>CSS</h4>
                <h6>Intermediate</h6>
            </div>
            <div className='skill-box'>
                <h4>BootStrap</h4>
                <h6>Intermediate</h6>
            </div>
            <div className='skill-box'>
                <h4>JavaScript</h4>
                <h6>Beginner</h6>
            </div>
            <div className='skill-box'>
                <h4>JQuery</h4>
                <h6>Beginner</h6>
            </div>
            <div className='skill-box'>
                <h4>Nodejs</h4>
                <h6>Beginner</h6>
            </div>
            <div className='skill-box'>
                <h4>Express</h4>
                <h6>beginner</h6>
            </div>
            <div className='skill-box'>
                <h4>ReactJs</h4>
                <h6>Intermediate</h6>
            </div>
            <div className='skill-box'>
                <h4>Redux</h4>
                <h6>intermediate</h6>
            </div>
            <div className='skill-box'>
                <h4>React-Native</h4>
                <h6>Beginner</h6>
            </div>

        </div>
    </div>
  )
}

export default Skill