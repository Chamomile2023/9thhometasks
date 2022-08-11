import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="container-fluid">
        <div className="sidebar__hero">
          <div className="sidebar__logo">
            <img src="./img/logo_twitter.svg" alt="" />
          </div>
          <ul className="sidebar--list">
            <li className="sidebar--item">
              <img src="./img/Home.svg" alt="" className="sidebar--img" />
              <NavLink to="/" className="sidebar--link">
                Home
              </NavLink>
            </li>
            <li className="sidebar--item">
              <img src="./img/explore.svg" alt="" className="sidebar--img" />
              <a href="#" className="sidebar--link">
                Explore
              </a>
            </li>
            <li className="sidebar--item">
              <img
                src="./img/notification.svg"
                alt=""
                className="sidebar--img"
              />
              <a href="#" className="sidebar--link">
                Notification
              </a>
            </li>
            <li className="sidebar--item">
              <img src="./img/message.svg" alt="" className="sidebar--img" />
              <a href="#" className="sidebar--link">
                Message
              </a>
            </li>
            <li className="sidebar--item">
              <img src="./img/bookmarks.svg" alt="" className="sidebar--img" />
              <a href="#" className="sidebar--link">
                Bookmarks
              </a>
            </li>
            <li className="sidebar--item">
              <img src="./img/lists.svg" alt="" className="sidebar--img" />
              <a href="#" className="sidebar--link">
                Lists
              </a>
            </li>
            <li className="sidebar--item">
              <img src="./img/profile.svg" alt="" className="sidebar--img" />
              <NavLink to="/Profile" className="sidebar--link">
                Profile
              </NavLink>
            </li>
            <li className="sidebar--item">
              <img src="./img/more.svg" alt="" className="sidebar--img" />
              <a href="#" className="sidebar--link">
                More
              </a>
            </li>
          </ul>
          <div className="sidebar__btn">
            <button className="sidebar--btn">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
