import React from "react";
import "./Header.css";

const Header = () => {

     const user = JSON.parse(localStorage.getItem("user"));
 

  return (
    <header className=" shadow-sm py-2" style={{ background :"#f6f7fb"}}>
      <div className="container-fluid px-4">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1 className="h4 mb-0 fw-bold text-dark">Dashboard</h1>
          </div>

          <div className="col-md-4 align-items-end justify-content-end ">
            <div className="position-relative">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
              />
              <svg
                className="search-icon position-absolute top-50 translate-middle-y"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-2">
              <div className="row align-items-center g-3">
                <div className="col-2 ms-2">
                  <div className="position-relative notification-wrapper">
                    <button className="btn btn-link p-0 border-0 text-dark">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </button>
                    <span className="badge bg-danger rounded-circle notification-badge">
                      2
                    </span>
                  </div>
                </div>

                <div className="col-8">
                  <div className="row align-items-center g-2">
                    <div className="col-auto position-relative">
                      <img
                        src="https://i.pravatar.cc/150?img=5"
                        alt="Emma Taylor"
                        className="rounded-circle profile-img"
                      />
                      <span className="online-indicator position-absolute rounded-circle"></span>
                    </div>

                    <div className="col d-none d-lg-block">
                      <p className="mb-0 fw-semibold user-name">{user?.name || "User"}</p>
                      <p className="mb-0 text-muted user-role">Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
