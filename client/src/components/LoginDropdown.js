import React, { Component } from "react";
import { Dropdown, Button, NavItem } from "react-materialize";

class loginDropdown extends Component {
  render() {
    return (
      <Dropdown
        style={{ margin: "36px 0 0 0" }}
        trigger={<Button>Login With</Button>}
      >
        <NavItem href="/auth/google">Google</NavItem>
        <NavItem href="/auth/facebook">Facebook</NavItem>
      </Dropdown>
    );
  }
}

export default loginDropdown;
