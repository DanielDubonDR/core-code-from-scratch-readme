import React from "react";

const Header = () => {
  const titulo = "Contact Manager by Daniel Dubon";

  return (
    <div className="ui fixed menu">
        <div className="ui container center">
            <h2>{titulo}</h2>
        </div>
    </div>
  )
}

export default Header;