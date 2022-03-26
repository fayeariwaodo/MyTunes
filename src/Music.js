import React from "react";
import { FaMusic } from "react-icons/fa";
import mockup from './Image/mockup1.png'

const Music = () => {
  return (
    <div className="second">
      <section className="icon">
        <div className="fa">
          <h1>
            <FaMusic />
          </h1>
        </div>
        <div className="fa">
          <h1> Music</h1>
        </div>
      </section>

      <div className="zero">
        <h1>45 million songs. Zero ads.</h1>
        <h4 className="songs">
          Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.
          </h4>
          <button className="btntry">Start your Trial Now</button>

          <h4 className="orange">Orange Music is available in myTunes, and for iOS and Android devices.</h4>
      </div>
       
      <div className="up">
         <img className="moc" src={mockup} alt="" />
      </div>
    </div>
  );
};

export default Music;
