// import { useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";

export default function Index() {
  const nav_list = [
    {
      title: "Home",
      href: "/home",
      icon: "fa fa-user",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: "fa fa-user",
    },
    {
      title: "Skills",
      href: "/skills",
      icon: "fa fa-user",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: "fa fa-user",
    },
    {
      title: "Blog",
      href: "/blog",
      icon: "fa fa-user",
    },
  ];
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav>
      <div className="container">
        <a href="#home" className="brand">
          <span>Ibobdb</span>
        </a>
        <ul>
          {nav_list.map((obj) => {
            return (
              <li
                key={obj.href}
                className={
                  splitLocation[1] === obj.title.toLocaleLowerCase() ||
                  splitLocation[1] === " "
                    ? "active"
                    : ""
                }
              >
                <a href={obj.href}>{obj.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
