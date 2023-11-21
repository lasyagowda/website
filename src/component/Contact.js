import "../css/Contact.css";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import  Loader from './Loader'


function Contact(){
    const form = useRef();

    const [Loaders,setLoader]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true)

    emailjs.sendForm('service_9ls7bnx', 'template_sxlprrg', form.current, 'P_FP8z-7uqq4mc69p')
      .then((result) => {
          alert("message sent")
          form.current.reset()
          setLoader(false)
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
            { !Loaders?
            <button type="sumbit" >SUBMIT</button>
            :
    <Loader/>
            }
        
            </form>
        </div>

        
        </>
    );
            
}
export default Contact;