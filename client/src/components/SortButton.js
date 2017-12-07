import React, { Component } from "react";
import { Row, Input } from "react-materialize";
import { connect } from "react-redux";
import { sortSurveys } from "../actions";
import sortTypes from "./sortTypes";
import _ from "lodash";

class SortButton extends Component {
  renderSortForm() {
    return _.map(sortTypes, ({ label, name }) => {
      return (
        <Input
          name="group1"
          type="radio"
          value={name}
          label={label}
          defaultChecked={name === "date" ? "checked" : ""}
          onClick={() => this.props.sortSurveys(name)}
        />
      );
    });
  }

  render() {
    return <Row style={{ margin: "10px 0 0 0" }}>{this.renderSortForm()}</Row>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { sortSurveys })(SortButton);
