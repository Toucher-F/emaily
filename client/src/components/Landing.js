import React from "react";
import email1 from "../images/timg.jpg";
import email2 from "../images/email.jpg";
import { Parallax } from "react-materialize";

const Landing = () => {
  return (
    <div>
      <div>
        <Parallax imageSrc={email1} />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Emaily</h2>
            <p className="grey-text text-darken-3 lighten-3">
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
