import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurveys, sortSurveys } from "../../actions";
import { withRouter } from "react-router-dom";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  sortSurveys(surveys, sort) {
    function surveyTitle(a, b) {
      if (a.title < b.title) return -1;
      return 1;
    }

    function voteNumber(a, b) {
      if (a.yes + a.no > b.yes + b.no) return -1;
      return 1;
    }
    function compareDate(a, b) {
      if (a.dateSent < b.dateSent) return -1;
      return 1;
    }

    switch (sort) {
      case "title":
        return surveys.sort(surveyTitle);
      case "vote":
        return surveys.sort(voteNumber);
      default:
        return surveys.sort(compareDate);
    }
  }

  renderSurveys() {
    return this.sortSurveys(this.props.surveys, this.props.sort).map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              {survey.title}
              <button
                className="btn-floating red right"
                onClick={() =>
                  this.props.deleteSurveys(
                    { surveyId: survey._id },
                    this.props.history
                  )
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

function mapStateToProps({ surveys, sort }) {
  //arguments returned by reducer!!!
  //get the state.surveys
  return { surveys, sort }; //return surveys component.props.surveys
}

export default connect(mapStateToProps, {
  fetchSurveys,
  deleteSurveys,
  sortSurveys
})(withRouter(SurveyList));
