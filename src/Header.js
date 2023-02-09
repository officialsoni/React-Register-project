import React from "react";
import { Link, NavLink } from "react-router-dom";
import download from "./download.png";

const Header = () => {
  return (
 <div>
   <div>
     <div>
      <section>
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
        <div className="container">
        <div className="fo">
          <form className="form-box">
            <div className="mb-3">
              <input type="name" className="form-control" placeholder="User Name" name="name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <p>By clicking 'Get Started', you agree to our Privacy Policy, Terms, 
              E-Consent, Rate &amp; Fees and receive special offers from us and 
              our marketing partners via email communication.</p>
           
             <NavLink className="loo" to="/Login">Login</NavLink>
             <NavLink className="loo" to="/Register">Register</NavLink>
          
             
          </form>
        </div>
          <div className="heading">
            <h1>Find Easy And Reliable Funds Up To $10,000 </h1>
          </div>
        </div>
      </section>
      <header>
      <div id="works" class="page">
            <h1>How it Works</h1>
          </div>
          <div class="btn">
            <button class="btn1">1</button>  
             <hr />
            <button class="btn2">2</button>
             <hr />
            <button class="btn3">3</button>
          </div>
        <div className="page1">
          <div className="clas1">
            <h1>Submit your information</h1>
            <p>Fill out our simple online form <br />
              which takes just a few minutes.<br />
              it's a secure, easy, and fast<br /> process.</p>
          </div>
          <div className="clas2">
            <h1>Fast loan decision</h1>
            <p>Fill out our simple online form <br />
              which takes just a few minutes.<br />
              it's a secure, easy, and fast<br /> process.</p>
          </div> 
          <div className="clas3">
            <h1>Check your account</h1>
            <p>Fill out our simple online form <br />
              which takes just a few minutes.<br />
              it's a secure, easy, and fast <br />
              process.</p>
          </div>
        </div>
      </header>
      <main>
        <div className="container2">
          <div className="img">
            <img width="120%" src="https://www.ringcentral.com/us/en/blog/wp-content/uploads/2021/06/AdobeStock_244751017.jpeg" alt="" />
          </div>
          <div className="page2">
            <h5>A loan with</h5>
            <h1>Any credit score</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Maxime fugiat 
              itaque dolor minus,blanditiis<br /> accusantium pariatur 
              quamsint nostrum<br />quas possimus molestiae modi con</p>
            <p>Disclosure: Our lenders may run <br />credit/background checks via methods of their<br />choice.</p> 
            <button>Get Started</button> 
          </div>
        </div>
      </main>
      <div className="container3">
        <div className="page3">
          <h1>Requested the money<br />you need</h1>
          <p>Submit Your Loan Request to see the options.<br />Receive the money in your checking account as soon<br />as next business day, if approved by the lender.</p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  </div>
</div>

   )
}
export default Header;




