import "../css/Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ls7bnx', 'template_sxlprrg', form.current, 'P_FP8z-7uqq4mc69p')
      .then((result) => {
          alert("message sent")
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
        <div className="contact">
            <h1>CONTACT</h1>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Full name" name="user-name"></input>
            <br></br>
            <input type="text" placeholder="E-mail" name="user-email"></input>
            <br></br>
            <input type="text" placeholder="Your Message" name="message"></input>
            <br></br>
            <button type="sumbit" >SUBMIT</button>
            </form>
        </div>
        
        
        </>
    );
}
export default Contact;