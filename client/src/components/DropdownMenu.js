import React, { Component } from "react";
import { Dropdown, Button, NavItem } from "react-materialize";
import { connect } from "react-redux";
import Payments from "./Payments";

class DropdownMenu extends Component {
  render() {
    return (
      <Dropdown
        style={{ margin: "36px 0 0 0" }}
        trigger={<Button>{this.props.auth.displayName}</Button>}
      >
        <NavItem>Credits: {this.props.auth.credits}</NavItem>
        <NavItem href="#!">
          <Payments />
        </NavItem>
        <NavItem divider />
        <NavItem href="/api/logout">Logout</NavItem>
      </Dropdown>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(DropdownMenu);
