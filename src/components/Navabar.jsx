import { NavLink } from "react-router-dom";
import { useRef } from "react";
import "../../styles/navbar.css";
import { Offcanvas } from "bootstrap";

function Navbar() {
  const expand = "lg";

  // Reference to the offcanvas element
  const offcanvasRef = useRef(null);

  // Function to close offcanvas
  const closeOffcanvas = () => {
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide(); // Hide the offcanvas programmatically
      }
    }
  };

  return (
    <>
      <div className="bg-body-secondary">
        <nav key={expand} className="navbar container navbar-expand-lg mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Codeprophet
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target={`#offcanvasNavbar-expand-${expand}`}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end custom-offcanvas-bg"
              tabIndex="-1"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              ref={offcanvasRef} // Attach ref to the offcanvas div
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Codeprophet
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mt-lg-0 mt-5 justify-content-center justify-content-lg-end align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-overlay active"
                      aria-current="page"
                      to="/"
                      onClick={closeOffcanvas} // Close on link click
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-overlay"
                      to="/card"
                      onClick={closeOffcanvas} // Close on link click
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-overlay"
                      to="/product"
                      onClick={closeOffcanvas} // Close on link click
                    >
                      Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-overlay"
                      to="/contact"
                      onClick={closeOffcanvas} // Close on link click
                    >
                      Contact us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
