import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/Nav.module.css";
import Logo from "../../image/fayviks.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      {/* Desktop view */}
      <nav class={style.navbar}>
        <div className={style.logo}>
          <Link  to="/">
          <img src={Logo} className="logo" />
        </Link>
        </div>
        <div className={style.link}>
          <ul class="">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Works
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile */}
      <nav className={style.mobileView}>
        <div className={style.logo}>
          <Link  to="/">
          <img src={Logo} className="logo" />
        </Link>
        <FontAwesomeIcon icon={faBars} className="ml-4"/> 
        </div>
        <div className={style.mobileLink}>
          <ul class="">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Works
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
