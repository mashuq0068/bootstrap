const Navbar = () => {
  return (
    <div className="d-lg-flex d-none  justify-content-between align-items-center">
        {/* logo */}
    <div className="d-flex align-items-center" style={{ gap: "10px" }}>
      <div>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_902_42)">
            <path
              d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_902_42">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <p className="fw-bold fs-2 h-100 mt-2">Positivus</p>
      </div>
    </div>
    {/* navLinks */}
    <div>
    <ul style={{gap:'40px'}} className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Use Cases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        
        <button className="btn border border-black rounded-3">
        Request a quote
        </button>
        </ul>
    </div>
  </div>
  
  );
};

export default Navbar;
