import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className ="d-flex flex-row">
      <div className = "p-2" ><nav class="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div class="navbar-brand mb-2 h1">CRUD APPLICATION</div>
        </div>
      </nav>
      </div>
      <div className = "p-2">
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">
            <div class="nav-link active mb-2 mt-2">HOME-PAGE</div>
          </Link>
        </li>
      </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
