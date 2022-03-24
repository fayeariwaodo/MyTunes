import React from "react";
import Tunesnav from './Tunesnav'
import Mytunes from "./Mytunes";
import Music from "./Music"
import Movie from "./Movie"
import Entertainment from "./Entertainment";
import Giftcards from "./Giftcards";
import Footer from "./Footer";



const Home = () => {
  return (
    <div>
    
      <Mytunes />
      <Music/>
      <Movie/>
      <Entertainment/>
      <Giftcards/>
      <Footer/>
    </div>
  );
};

export default Home;
