import NewSurvey from "../../components/create-survey/create-survey";
import SurveyList from "../../components/survey-list/survey-list";

const Surveys = () => {
  return (
    <div className="container UserSurveysPage">
      <NewSurvey />
      <SurveyList />
    </div>
  );
};

export default Surveys;
