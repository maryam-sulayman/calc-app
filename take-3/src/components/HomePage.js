import React from "react";
import "../Styles/HomePage.css"
import ImageOne from "../images/ImageOne.jpg"
import Postcode from "./Postcode";
import TransactionType from "./TransactionType";
import CurrentLocation from "./CurrentLocation";


const HomePage = () => {
return ( 
<div className="home-page-container">
  <div className="home-page-image">
    <div className="row">
      <div className="col-5">
      <img src={ImageOne} alt="homepage"></img>
      </div>
      <div className="col-7">
    <div className="home-page-content">
    </div>
    <section className="section-one">
    <h2 className="mt-3 fw-bold">Enter Your Postcode</h2>
    <Postcode/>
    </section>
    <section>
      <CurrentLocation/>
    </section>
    <section className="section-two mt-5">
    <h5 className="mb-4 fw-bold">Are You Looking To?</h5>
    <TransactionType/>
    </section>
    </div>
    </div>
  </div>
</div> 
);
}
 
export default HomePage;