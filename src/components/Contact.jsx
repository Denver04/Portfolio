import React, { useRef , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../form.css";
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css"

function Contact() {
    const form = useRef();
    useEffect(()=>{
        Aos.init({duration:1000});
      } , [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wegm80f', 'template_d25jrp6', form.current, 'vqCFLk2iKYYKNXLX_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-part'>
    <div className='contact'>
        <h1>Contact Me</h1>
        <h4>Wanna ask or say something ....</h4>
        <div>
        <i class="fa-solid fa-envelope"></i> <>abhisekkumarsingh021@gmail.com</>
        </div>
        
    </div>
    <div className='form' data-aos="zoom-in">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" className='submit' value="Send" />
    </form>
    </div>
    </div>
  )
}

export default Contact