import React, { Component } from "react";
import { Dropdown, Button, NavItem } from "react-materialize";

class loginDropdown extends Component {
  render() {
    return (
      <Dropdown
        style={{ margin: "63px 0 0 0" }}
        trigger={
          <li>
            <a class="dropdown-button" href="#!" data-activates="dropdown1">
              Login With<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        }
      >
        <li
          style={{
            backgroundColor: "#dd4b39"
          }}
        >
          <a href="/auth/google" className="white-text">
            <i className="fa fa-google-plus" style={{ margin: "0 4px" }} />Google
          </a>
        </li>

        <li
          style={{
            color: "white",
            backgroundColor: "#3b5998"
          }}
        >
          <a className="white-text" href="/auth/facebook">
            <i
              className="fa fa-facebook-official"
              style={{ margin: "0 4px" }}
            />Facebook
          </a>
        </li>
      </Dropdown>
    );
  }
}

export default loginDropdown;
