import "../css/Project.css"
import Ecommerces1 from "../images/Ecommerces1.jpg";
import brandguideness1 from "../images/brandguideness1.jpg";
import currency from "../images/currency.webp";
function Project(){
    return (
        <>
        <div className="project">
            <h1>PROJECT</h1>
            <div className="container1">
            <div class="project1 he">
    
    <h2>E-COMMERCE</h2>
    <img src={Ecommerces1}></img>
    
</div>

<div className="project2 he">
    <h2>BRAND GUIDENESS</h2>
    <img src={brandguideness1}></img>
</div>
    <div className="project3 he">
    <h2>CURRENCY CONVETER</h2>
    <img src={currency}></img></div>
        </div>
        </div>
        </>
  );
}
export default Project;