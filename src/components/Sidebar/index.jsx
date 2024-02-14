import React from "react";
import "./sidebar.css";
import ProfileIcon from "../ProfileIcon";
import TransparentOverlay from "../TransparentOverlay/index";
const Sidebar = ({state, toggleSidebar, toggleDownbar }) => {
  return (
    <>
      <div className={`sidebar ${state ? "open" : ""}`}>
        <div className="sidebarProfContainer">
          <ProfileIcon hamburger={false} />
          <h3>Hello, aminesh</h3>
          {/* <Button>Login</Button> */}
        </div>
        <ul>
          <li>
            <span>
              <img src="/Images/profile-icon.svg" alt="" />
            </span>{" "}
            My Account
          </li>
          <li>
            <span>
              <img src="/Images/giftcard-Icon.svg" alt="" />
            </span>{" "}
            My Gift Cards
          </li>
          <li>
            <span>
              <img src="/Images/order-bag.svg" alt="" />
            </span>{" "}
            Orders
          </li>
          <li onClick={() => toggleDownbar()}>
            <span>
              <img src="/Images/logout-icon.svg" alt="" />
            </span>{" "}
            Logout
          </li>
        </ul>
      </div>
      <TransparentOverlay
        handleClick={toggleSidebar}
        customeClass="SidebarOverlay"
        isOpen={state}
      />
    </>
  );
};

export default Sidebar;
