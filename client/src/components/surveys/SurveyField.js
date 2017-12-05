// SurveyField ontains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, defaultValue, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{ marginBottom: "5px" }}
        placeholder={defaultValue}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
