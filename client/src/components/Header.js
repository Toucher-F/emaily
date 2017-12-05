import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <DropdownMenu key="2" />
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ margin: "0 0 0 10px" }}
          >
            Emaily
          </Link>
          <ul className="right" style={{ margin: "0 10px 0 0" }}>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
