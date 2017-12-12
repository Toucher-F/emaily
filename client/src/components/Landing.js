import React from "react";
import email1 from "../images/1920x1080-data_out_42_402786070-email-wallpapers.jpg";
import email2 from "../images/mail-wallpaper-1920x1080.jpg";
import { Parallax } from "react-materialize";

const Landing = () => {
  return (
    <div>
      <div>
        <Parallax imageSrc={email1} />
        <div className="section blue darken-2">
          <div className="row container white-text">
            <h2 className="header">Emaily</h2>
            <p className="white-text text-darken-3 ">
              Collect feedback from your users!
            </p>
          </div>
        </div>
        <Parallax imageSrc={email2} />
      </div>
    </div>
  );
};
export default Landing;

/*
</div>
  <div style={{ textAlign: "center" }}>
    <h1>Emaily!</h1>
    Collect feedback from your users
  </div>


*/
