import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurveys } from "../../actions";
import { withRouter } from "react-router-dom";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              {survey.title}
              <button
                className="btn-floating red right"
                onClick={() =>
                  this.props.deleteSurveys(survey._id, this.props.history)
                }
              >
                <i className="material-icons" style={{ marginTop: "5px" }}>
                  delete
                </i>
              </button>
            </span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveys })(
  withRouter(SurveyList)
);
