import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="#E7D85F"
              id="Path_498"
              class="st0"
              d="M5.1,0h21.8C29.7,0,32,2.3,32,5.1v21.8c0,2.8-2.3,5.1-5.1,5.1H5.1C2.3,32,0,29.7,0,26.9V5.1
          C0,2.3,2.3,0,5.1,0z"
            />
            <g id="Group_858" transform="translate(4.647 7.836)">
              <path
                fill="#000000"
                id="Path_1"
                d="M1.3,6.1h2.3v0.7h0C4.1,6.3,4.8,6,5.6,5.9c0.9-0.1,1.8,0.4,2.3,1.2C8.4,6.4,9.2,6,10.1,5.9
            c1.3-0.1,2.5,0.8,2.6,2.1c0,0.1,0,0.2,0,0.4v4.4h-2.3V9c0.1-0.6-0.4-1.2-1-1.2c-0.1,0-0.1,0-0.2,0c-0.6,0-1,0.4-1.1,1
            c0,0,0,0,0,0.1v4H5.9V9c0.1-0.6-0.4-1.2-1-1.2c-0.1,0-0.1,0-0.2,0c-0.6,0-1.1,0.4-1.1,1c0,0,0,0.1,0,0.1v3.9H1.3V6.1z"
              />
              <path
                fill="#000000"
                id="Path_5"
                d="M18.7,13c-0.8,0-1.6-0.3-2.2-1h0v0.8h-2.3V2.2h2.3v4.6c0.6-0.6,1.4-0.9,2.2-0.8c1.9,0,3.3,1.5,3.3,3.4
            c0,0,0,0.1,0,0.1c0.1,1.9-1.3,3.4-3.2,3.5C18.8,13,18.8,13,18.7,13 M18,7.9c-0.8,0-1.5,0.7-1.6,1.5c0,0,0,0.1,0,0.1
            c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C19.6,8.6,18.9,7.9,18,7.9C18.1,7.9,18.1,7.9,18,7.9"
              />
            </g>
          </g>
        </svg>
        <h1>AppName</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
