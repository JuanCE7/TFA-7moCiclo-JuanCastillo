import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SideBar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon
        to="/"
        icon={<img src="./src/img/UNL3.png" alt="Logo" size="32" />}
        text="Universidad Nacional de Loja"
      />
      {isAuthenticated ? (
        <>
          <Divider />
          <SideBarIcon
            to="/"
            onClick={() => {
              logout();
            }}
            icon={<BsGearFill size="22" />}
            text="Logout"
          />
        </>
      ) : (
        <>
          <SideBarIcon to="/login" icon={<BsPlus size="32" />} text="Add" />
          <SideBarIcon
            to="/tasks"
            icon={<BsFillLightningFill size="20" />}
            text="Lightning"
          />
          <SideBarIcon to="/login" icon={<FaPoo size="20" />} text="Poo" />
          <Divider />
        </>
      )}
    </div>
  );
};

const SideBarIcon = ({ to, icon, text }) => (
  <Link to={to} className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
