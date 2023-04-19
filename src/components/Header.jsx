import React, { useState, useEffect } from 'react';
import Logo22 from './Logo22.png';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getClassName = (path) => {
    if (path == '/') {
      if (activeLink === path) {
        return 'font-weight text-info';
      } else {
        return 'text-dark';
      }
    } else if (activeLink.includes(path)) {
      //Uses .includes() due to ids being part of links
      return 'font-weight text-info';
    } else {
      return 'text-dark';
    }
  };

  //   const getClassName = props => {
  //     return `${props.isActive ? 'font-bold' : ''} hover:underline hover:text-gray-600 transition duration-300 `
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <RouterLink to="/posts">
            <img className="logo" src={Logo22} alt="My Image" />
          </RouterLink>

          {/* <button
=======
          <RouterLink to="/">
            <img className="logo" src={Logo22} alt="My Image" />
          </RouterLink>
          <button
>>>>>>> abd1f8ae65f58e93a079aa52a87e3438fe588fe7
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse pt-3 px-3" id="navmenu">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-link navs" data-testid="Home Link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName('/posts')} display-4`}
                    to="/posts"
                  >
                    Home
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName('/create')} display-4`}
                    to="/create"
                  >
                    Create
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs navbar-nav navbar-right">
                  <RouterLink
                    className={`${getClassName('/')} display-4`}
                    to="/"
                  >
                    About
                  </RouterLink>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
