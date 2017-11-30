import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={() =>
                this.props.auth ? <Redirect to="/surveys" /> : <Landing />
              }
            />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
