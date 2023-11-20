import "../css/Contact.css";

function Contact(){
    return(
        <>
        <div className="contact">
            <h1>CONTACT</h1>
            <input type="text" placeholder="Full name"></input>
            <br></br>
            <input type="text" placeholder="E-mail"></input>
            <br></br>
            <input type="text" placeholder="Your Message"></input>
            <br></br>
            
        </div>
        <button>SUBMIT</button>
        </>
    );
}
export default Contact;