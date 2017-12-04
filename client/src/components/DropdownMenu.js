import React, { Component } from "react";
import { Dropdown, Button, NavItem } from "react-materialize";
import { connect } from "react-redux";

class DropdownMenu extends Component {
  render() {
    return (
      <Dropdown trigger={<Button>{this.props.auth.displayName}</Button>}>
        <NavItem>Credits: {this.props.auth.credits}</NavItem>
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
