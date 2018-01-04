import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-materialize";
import { fetchSurveys, deleteSurveys, sortSurveys } from "../../actions";
import { withRouter } from "react-router-dom";
import emptyMailbox from "../../icons/empty-mailbox-edit.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    //console.log(this.props.surveys);
    if (this.props.surveys.length === 0) {
      return (
        <div className="row">
          <label disabled="true">
            <h2
              className="grey-text text-lighten-3 unselectable"
              style={{ textAlign: "center" }}
            >
              Current mailbox is empty!
            </h2>
          </label>
          <div className="row">
            <img
              src={emptyMailbox}
              alt="empty-mailbox"
              className="col s6 offset-s3 unselectable"
              style={{ marginTop: "50px" }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <ReactCSSTransitionGroup {...transitionOptions}>
          {this.sortSurveys(this.props.surveys, this.props.sort).map(survey => {
            return (
              <div className="card darken-1" key={survey._id}>
                <div className="card-content">
                  <span className="card-title">
                    {survey.title}

                    <Modal
                      header={`Delete survey ${survey.title} ?`}
                      trigger={
                        <button className="btn-floating red right">
                          <i
                            className="material-icons"
                            style={{ marginTop: "5px" }}
                          >
                            delete
                          </i>
                        </button>
                      }
                      actions={
                        <div>
                          <button
                            className="btn red darken-2 modal-close modal-action"
                            onClick={() =>
                              this.props.deleteSurveys(
                                { surveyId: survey._id },
                                this.props.history
                              )
                            }
                          >
                            delete
                          </button>
                          <button
                            style={{ marginRight: "20px" }}
                            className="btn grey modal-close modal-action"
                          >
                            dismiss
                          </button>
                        </div>
                      }
                    >
                      <p>
                        Once you remove a survey, there is no going back. Please
                        be certain.
                      </p>
                    </Modal>
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
          })}
        </ReactCSSTransitionGroup>
      );
    }
  }
  render() {
    let style = {
      marginBottom: `${200 *
        (3 -
          (this.props.surveys.length === 0 || this.props.surveys.length > 3
            ? 2.75
            : this.props.surveys.length))}px`
    };
    //console.log(style);
    return <div style={style}>{this.renderSurveys()}</div>;
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
