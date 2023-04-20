import { FC } from "react";

const NavBar: FC = (): JSX.Element => {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Al Imdad
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="about" className="nav-item nav-link">
              About
            </a>
            <a href="causes" className="nav-item nav-link">
              Causes
            </a>
            <a href="event" className="nav-item nav-link">
              Events
            </a>
            {/* <a href="blog" className="nav-item nav-link">
              Blog
            </a> */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu">
                {/* <a href="single" className="dropdown-item">
                  Detail Page
                </a> */}
                <a href="service" className="dropdown-item">
                  What We Do
                </a>
                {/* <a href="team" className="dropdown-item">
                  Meet The Team
                </a> */}
                <a href="donate" className="dropdown-item">
                  Donate Now
                </a>
                <a href="volunteer" className="dropdown-item">
                  Become A Volunteer
                </a>
              </div>
            </div>
            <a href="contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
