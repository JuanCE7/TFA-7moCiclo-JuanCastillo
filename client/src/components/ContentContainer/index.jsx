import SideBar from "../SideBar";
import TopNavigation from "../TopNavigation";

import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import TaskFormPage from "../../pages/TaskFormPage";
import TasksPage from "../../pages/TasksPage";
import ProfilePage from "../../pages/ProfilePage";
import HomePage from "../../pages/HomePage";
import ProtectedRoute from "../../ProtectedRoute";
const ContentContainer = () => {
  return (
    <div className="content-container">
      <SideBar />
      <TopNavigation />
      
    </div>
  );
};

export default ContentContainer;
