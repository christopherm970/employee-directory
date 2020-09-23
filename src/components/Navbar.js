import React from "react";

const styles = {
    navbarStyle: {
      background: "grey",
      justifyContent: "flex-end"
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a href="/">Employee Directory</a>
      </nav>
    );
  }
  
  export default Navbar;