import React from 'react';

const Header = ({ children }) => (
  <div className="header-bar">
    <a href="/">
      <div className="title-box">
        Today's mood
        <div className="subtitle">
          A Wellness Tracker
        </div>
      </div>
    </a>
    <div className="navigation-bar">
      {children}
    </div>
  </div>
);

export default Header;
