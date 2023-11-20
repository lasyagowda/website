import { Link } from "react-router-dom";
import "../css/Navbar.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [loc, setloc] = useState("/");

  useEffect(() => {
    {
      setloc(location.pathname);
    }
  }, [location]);
  // this to create about function
  const hamb = (value) => {
    setNavbar(value);
  };
  return (
    <div class="navbar">
      <nav>
        <h2>PORTFOLIO</h2>
        <ul>
          {loc === "/" ? (
            ""
          ) : (
            <li>
              <Link to="/" className="media">
                Home
              </Link>
            </li>
          )}
          {loc === "/about" ? (
            ""
          ) : (
            <li>
              <Link to="/about" className="media">
                About
              </Link>
            </li>
          )}
          {loc === "/skill" ? (
            ""
          ) : (
            <li>
              <Link to="/skill" className="media">
                Skills
              </Link>
            </li>
          )}
          {
            loc ==="/Project" ?(
              ""

            ):(
          
          <li>
            <Link to="/Project" className="media">
              Project
            </Link>
          </li>
          )}
          {
            loc ==="/Contact" ?(
              ""

            ):(
          
          <li>
            <Link to="/Contact" className="media">
              Contact
            </Link>
          </li>
          )}
          <li>
            <a href="#" onClick={() => hamb(true)} id="hamb">
              &#9776;
            </a>
          </li>
        </ul>
        {navbar ? (
          <>
            <ul class="sidebar">
              <li>
                <a href="#" onClick={() => hamb(false)} id="hamb">
                  &#x2715;
                </a>
              </li>
              {loc === "/" ? (
                ""
              ) : (
                <li>
                  <Link to="/" onClick={() => hamb(false)}>
                    Home{" "}
                  </Link>
                </li>
              )}
              {loc=== "/about" ? (
                ""
              ) : (
                <li>
                  <Link to="/about" onClick={() => hamb(false)}>
                    About
                  </Link>
                </li>
              )}
              {loc=== "/skill" ? (
                ""
              ) : (
                <li>
                  <Link to="/skill" onClick={() => hamb(false)}>
                    Skills
                  </Link>
                </li>
              )}
              {
                 loc=== "/Project" ? (
                  ""
                ) : (
                  <li>
                    <Link to="/Project" onClick={() => hamb(false)}>
                      Project
                    </Link>
                  </li>
              )}
               {
                 loc=== "/Contact" ? (
                  ""
                ) : (
                  <li>
                    <Link to="/Contact" onClick={() => hamb(false)}>
                      Contact
                    </Link>
                  </li>
              )}
            </ul>
          </>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
export default Navbar;
