import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-success fs-3" href="#">
          Greetings
          <span className="d-block fs-6 text-muted">ISLAND</span>
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold">Wedding</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Birthday</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Baby & Kids</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Party</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Greeting cards</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold">Trending</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="btn rounded-circle border">🔍</button>

            <button className="btn btn-light">Log in</button>

            <button className="btn btn-primary rounded-pill px-4">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
