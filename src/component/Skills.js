import "../css/Skills.css";
import javascript from "../images/javascript.png";
import react1 from "../images/react1.png";
import python from "../images/python.jpg";
import git from "../images/git.png";
function Skills() {
  return (
    <>
      <div className="main">
        <h1>SKILLS</h1>
        <div className="Skillsimage">

  <img src={javascript}alt="javascript"></img>
  <div class="content">
    <div class="text">Javascript</div>

</div>
            
              <img src={react1}></img>
            </div>
          </div>
          <div className="main">
        
        <div className="Skillsimage">
        
            <img src={python}></img>
            <br></br>
            
              <img src={git}></img>
            </div>
          </div>
          <button>Touch Me</button>
        
      
    </>
  );
}
export default Skills;
