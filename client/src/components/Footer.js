import React from "react";
import { Footer } from "react-materialize";

const AddFooter = () => {
  return (
    <Footer
      copyrights=" &copy; 2017 Copyright"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          lianduanb@gmail.com
        </a>
      }
      links={
        <ul>
          <li>
            <h5 className="grey-text text-lighten-3 unselectable">Contact</h5>
          </li>
          <div>
            <li
              className="btn"
              style={{
                color: "white",
                backgroundColor: "#0077B5",
                marginTop: "5px"
              }}
            >
              <a
                className="grey-text text-lighten-3"
                href="https://www.linkedin.com/in/lian-duan-9451a0155/"
              >
                <i
                  className="fa fa-linkedin-square"
                  style={{ margin: "0 4px" }}
                />LinkedIn
              </a>
            </li>
          </div>
          <div>
            <li
              className="btn"
              style={{
                color: "white",
                backgroundColor: "#3a3133",
                marginTop: "5px"
              }}
            >
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/Toucher-F"
              >
                <i className="fa fa-github" style={{ margin: "0 4px" }} />{" "}
                Github
              </a>
            </li>
          </div>
          <div>
            <li
              className="btn"
              style={{
                color: "white",
                backgroundColor: "#3b5998",
                marginTop: "5px"
              }}
            >
              <a
                className="grey-text text-lighten-3"
                href="https://www.facebook.com/profile.php?id=100007672720757"
              >
                <i
                  className="fa fa-facebook official"
                  style={{ margin: "0 4px" }}
                />Facebook
              </a>
            </li>
          </div>
        </ul>
      }
      className="example  light-blue darken-4"
    >
      <h5 className="white-text">Thank you for using Emaily!</h5>
      <h6 className="grey-text text-lighten-4" style={{ marginTop: "10px" }}>
        Contributor:
      </h6>
      <p>Bill Duan</p>
      <p>Jonathan Hu</p>
    </Footer>
  );
};

export default AddFooter;
