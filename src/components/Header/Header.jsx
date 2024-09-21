import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Order your<br></br> favourite food here
        </h2>

        <p>
          Enjoy delicious meals delivered right to your doorstep with fast and
          reliable service, anytime you crave.
        </p>

        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
