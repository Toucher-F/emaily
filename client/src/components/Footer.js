import React from "react";
import { Footer } from "react-materialize";

const AddFooter = () => {
  return (
    <Footer
      copyrights="2017 Copyright"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          v0.171211
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
                backgroundColor: "#dd4b39",
                marginTop: "5px"
              }}
            >
              <a className="grey-text text-lighten-3" href="#!">
                <i className="fa fa-google-plus" style={{ margin: "0 4px" }} />Gmail
              </a>
            </li>
          </div>
          <div>
            <li
              className="btn"
              style={{
                color: "white",
                backgroundColor: "#00aced",
                marginTop: "5px"
              }}
            >
              <a className="grey-text text-lighten-3" href="#!">
                <i className="fa fa-twitter" style={{ margin: "0 4px" }} />{" "}
                Twitter
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
              <a className="grey-text text-lighten-3" href="#!">
                <i
                  className="fa fa-facebook official"
                  style={{ margin: "0 4px" }}
                />Facebook
              </a>
            </li>
          </div>
        </ul>
      }
      className="example"
    >
      <h5 className="white-text">Thanks for using Emaily!</h5>
      <h6 className="grey-text text-lighten-4">Contributor:</h6>
      <p>Bill Duan</p>
      <p>Jonathan Hu</p>
    </Footer>
  );
};

export default AddFooter;
