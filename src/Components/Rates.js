import { Link, NavLink } from "react-router-dom";
import download from "../Components/download.png";

function Rates() {
  return (
    <div className="Rates">
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
     <div className="Raa">
      <h1>Rates and Fees</h1>
      <hr />
      
      <div className="rates1">
        <p>We’re focused on transparency so you know exactly where you stand at all times.</p>
        <h1>www.maxloanusa.com has no control over loan rates</h1>
        <p>The rates and fees pertaining to your funds will eventually be controlled by your lender. It is the objective of www.maxloanusa.com to assure that you will deal with those lenders who comply with the Federal and<br /> state lending rules. Along the same lines, we give a lot of information to enable you to tackle any<br /> issues that may emerge with the lender you select.</p>
      </div>
      <div className="rates2">
        <h1>There are repercussions of late payments or default payments</h1>
        <p>The most critical thing that you should comprehend as a borrower is an implication of making late installments<br /> on your credit.Although every lender whom we work with has its own particular terms and conditions for the<br /> advances they offer, however, there are some late-installment repercussions that you ought to know before<br /> entering into a loan contract with the lender.</p>
      </div>
      <div className="rates3">
        <h1>Perusal of clauses in the contract is must</h1>
        <p>It is vital to comprehend the penalties and installment choices for the particular lender that you are associated<br /> with and to ensure that you totally comprehend their policies.</p>
       <NavLink className="cross" to="/">Close</NavLink>
      </div>
    </div>
  </div>
  )
}
export default Rates