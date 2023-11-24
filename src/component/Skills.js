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

        <div className="skill1">
          <div class="example">
            <img src={javascript} width="250" height="250" alt="tree" />
            <div class="content">
              <div class="text">Javascript</div>
            </div>
          </div>
          <div class="example">
            <img src={react1} width="250" height="250" alt="tree" />
            <div class="content">
              <div class="text">React</div>
            </div>
          </div>
        </div>
        <div className="skill1">
          <div class="example">
            <img src={git} width="250" height="250" alt="tree" />
            <div class="content">
              <div class="text">Git</div>
            </div>
          </div>
          <div class="example">
            <img src={python} width="250" height="250" alt="tree" />
            <div class="content">
              <div class="text">Python</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
