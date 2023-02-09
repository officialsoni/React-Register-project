import { Link, NavLink } from "react-router-dom";
import download from "../Components/download.png";

function Contact() {
  return (
    <div className="Contact">
      <nav>
        <div className="image">
          <img width="50%" src={download} alt="" />
        </div>
        <div className="menu">
          <a className="aa" href="#works">How it works</a>
          <Link className="ll" to="/Rates">Rates and Fee</Link>
          <Link className="ll" to="/Contact">Contact us</Link>
        </div>
      </nav>
      <header className="Contact1">
        <div className="Con">
          <div className="Con1">
            <h1>Contact Us</h1>
            <hr />
            <h2>Keep In Touch</h2>
            <p>If you have a question, comment, or opinion about anything on this<br /> site, or if you’d like to submit a review or complaint about a lender,<br /> please use the form below. We appreciate any and all feedback, and<br /> we respect your privacy.</p>
          </div>
          <div className="Con2">
            <h1>Address : <span className="co">421 S Brookhurst St Suite 167 Anaheim, CA 92804</span></h1>
            <h1>Phone : <span className="co">+1-844-368-6075</span></h1>
            <h1>Email : <span className="co">info@www.maxloan.com</span></h1>
          </div>
        </div>

        <div className="container">
          <div className="fo">
            <form className="form-box1">
              <div className="box">
                <input type="name" className="form-control" placeholder="First Name" name="name" />
              </div>
              <div className="box">
                <input type="name" className="form-control" placeholder="Last Name" name="name" />
              </div>
              <div className="box1">
                <textarea className="form-control" rows="3" cols="35" placeholder="Message" name="bio" />
                
              </div>
              <NavLink className="lo mb-3" to="/">Save</NavLink>
              <NavLink className="close" to="/">Close</NavLink>
           </form>
          </div>
        </div>

      </header>
    </div>

    
  )
}
export default Contact