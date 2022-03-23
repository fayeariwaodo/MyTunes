import React from "react";
import mock2 from "./Image/mockup2.png"

const Movie = () => {
  return (
    <div className="contain">
      <div className="tv">
        <h1>The movie and TV collection you always wished for. Granted.</h1>

        <p className="para">
        With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.
        </p>

       <div className="btnmore"> <button className="more">Read More</button></div>

       
            <img className="mock2" src={mock2} alt="" />
     
      </div>
       


    </div>
  );
};

export default Movie;
