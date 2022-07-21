import React , {useEffect} from 'react';
import "../card.css";
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css"

function Projects() {
    useEffect(()=>{
        Aos.init({duration:900});
    } , [])
  return (
    <div className='main-project'>
        <h1>Projects</h1>
        <div className='project'>
        <a href='https://denver04.github.io/Aimore/' target="_blank" className='project-card' data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className='card-head'>
                <h3>Aimore</h3>
            </div>
            <div className='card-body'>
                <p>A food website which I made using <strong>ReactJs</strong> and <strong>Redux</strong>. Not responsive though. You can add items into your cart.</p>
            </div>
            <button>View </button>
        </a>
        <a href='https://denver04.github.io/NoInstaClone/' className='project-card' data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1000" target="_blank">
            <div className='card-head'>
                <h3>NoInstaClone</h3>
            </div>
            <div className='card-body'>
                <p>A website similar to Instagram in which you can like the image by either clicking the like button or double tapping over image. Pure <strong>ReactJs</strong> is used. Fully responsive </p>
            </div>
            <button>View </button>
        </a>
        <a href='https://denver04.github.io/Riot-User/#/' className='project-card' data-aos="flip-left" target="_blank"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className='card-head'>
                <h3>Riot-User</h3>
            </div>
            <div className='card-body'>
                <p>This one is made using <strong>ReactJs</strong> and <strong>Redux</strong>. A CRUD based application is build in which you can add , edit , or delete the user info. Not responsive though.</p>
            </div>
            <button>View</button>
        </a>
        <a href='https://denver04.github.io/react-deploy/' className='project-card' data-aos="flip-right" target="_blank"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className='card-head'>
                <h3>React-Deploy</h3>
            </div>
            <div className='card-body'>
                <p>I made this for an intern. I used only <strong>Reactjs</strong> in this project. This is not responsive also. Contains multiple pages. Also used the react routing in this. </p>
            </div>
            <button>View </button>
        </a>
        <a href='https://github.com/Denver04/dice-drum/tree/main/Drum%20Kit' className='project-card' data-aos="flip-left" target='_blank'
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className='card-head'>
                <h3>Drun-Beater</h3>
            </div>
            <div className='card-body'>
                <p style={{backgroundColor:"none"}}>This website is made up of only <strong>JavaScript</strong>. You can click the drum by mouse or click the respective buttons from your keyboard to listen the sound</p>
            </div>
            <button>View</button>
        </a>
        <a href='https://github.com/Denver04/Site' className='project-card' data-aos="flip-right" target="_blank"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <div className='card-head'>
                <h3>About-Page</h3>
            </div>
            <div className='card-body'>
                <p>This website is build using <strong>EJS</strong> , <strong>HTML</strong> , and <strong>CSS</strong>. You can register and login to see the credentials of your own in case you forget. The website is not responsive though.</p>
            </div>
            <button>View</button>
        </a>
        </div>
    </div>
  )
}

export default Projects