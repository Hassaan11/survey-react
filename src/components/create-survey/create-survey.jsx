import React from "react";

const NewSurvey = () => {
  return (
    <button
      className="btn btn-primary"
      // onClick={() => this.props.createSurvey(this.props.currentUser.id)}
      onClick={() => console.log}
      // disabled={this.props.isLoading}
    >
      {/* {this.props.isLoading ? "Loading..." : "New Survey"} */}
      New Survey
    </button>
  );
};

export default NewSurvey;
