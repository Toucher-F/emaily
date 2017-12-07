import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import SortButton from "./SortButton";

const Dashboard = () => {
  return (
    <div>
      <label>
        <i className="material-icons " style={{ margin: "10px 0 0 10px" }}>
          sort
        </i>Sort By
      </label>
      <SortButton />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
