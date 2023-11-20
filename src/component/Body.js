import "../css/Body.css"
import img2 from "../images/img2.jpg"
function Body(){
    return(
        <>
                <div className="dregal">

        <center>
        <h1>PORTFOLIO</h1>
        </center>
        </div>
        <div class="detail">
        <h1>Hii I am Lasyaa <span>Gowda</span></h1>
        <h3>I am a  <span id="element"></span></h3>
        
        <br></br>
        <p>This is my personal portfolio  website</p>
        <a href="#">DOWNLOAD CV</a>
    </div>
        <div className="image">
<img src={img2}></img>
</div>
        
        
        
        </>
    );
    }
    export default Body;