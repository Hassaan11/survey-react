import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavBar from "./components/navbar/navbar";
import LoginForm from "./pages/Auth/login/login";
import RegisterForm from "./pages/Auth/register/register";
import SurveyPage from "./pages/surveys/surveys";
import Surveys from "./pages/user-surveys/survey";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Surveys />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/survey/:surveyId" element={<SurveyPage />} />
      </Routes>
    </>
  );
}

export default App;
