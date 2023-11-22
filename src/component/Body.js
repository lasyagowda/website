import "../css/Body.css"
import img2 from "../images/img2.jpg"
function Body(){
    return(
        <>
               
        <div className="body-flex">
        <div class="detail">
        <h1>Hii I am Lasyaa <span>Gowda</span></h1>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"></link>

     <h3 aria-label="keep coding">
    keep &nbsp;<span class="typewriter"></span>
     </h3>
        <p>This is my personal portfolio  website</p>
        <a href="#">DOWNLOAD CV</a>
    </div>
        <div className="image">
        <img src="https://assets-v2.lottiefiles.com/a/f75ac2f2-116a-11ee-aa38-a35154041321/UTSEH078Aw.gif" width="400px"></img>
        </div>
        </div>
        
        
        
        </>
    );
    }
    export default Body;