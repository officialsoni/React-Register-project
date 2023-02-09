import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
      <div>
        <nav>
          <div className="image">
          </div>
          <div className="menu">
           <a className="aa" href="#works">How it works</a>
           <Link className="ll" to="/Rates">Rates and Fee</Link>
           <Link className="ll" to="/Contact">Contact us</Link>
          </div>
        </nav>

        
      </div>
    )
  }
export default Login