import "../css/Project.css"
import webdevelopment1 from "../images/webdevelopment1.jpg";
import phone1 from "../images/phone1.jpg"
function Project(){
    return (
        <>
        <div className="project">
            <h1>PROJECT</h1>
            <div className="container1">
            <div class="project1">
    
    <h2>WEB DEVELOPMENT</h2>
    <img src={webdevelopment1}></img>
    <p> I have developed some web development project using HTML,CSS</p>   
</div>

<div className="project2">
    <h2>MOBILE APPLICATION</h2>
    <img src={phone1}></img>
    <p>This is abt are a move away from the integrated software systems...</p>
</div>
</div>
        </div>
        
        </>
  );
}
export default Project;