import React from "react";
import card from "./Image/cards.png";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Giftcards = () => {
  return (
    <div>
      <div className="parent">
        <div className="card">
          <img className="imgcard" src={card} alt="" />
        </div>
        <div className="cardpara">'
         <h2 className="headgift"> 
            Gift Cards</h2>
          <p className="paragift">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            expedita tempore quasi omnis a aut et totam illo fuga accusamus
            dolorum vero, ut harum consectetur. Minima molestias officiis culpa
            non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis
            porro.
          </p>
          <p className="paragift">Already have an Orange MyTunes Music Gift Card?</p>

          <hr />

          <div ><Link className="right"><FaChevronRight/>Redeem</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Giftcards;
