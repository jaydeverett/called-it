import React from 'react';

  const Header = (props) => {
    return (
      <div>
        <h1>CalledIt</h1>
        <h3 className="tagline">{props.tagline}</h3>
      </div>
    );
  }

export default Header;
