import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers.jsx";
import Trending from "./pages/Trending.jsx";
import Feed from "./pages/Feed.jsx";

const App = () => {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
          <div className="container">
            {/* Brand Logo */}
            <Link
              to="/feed"
              className="navbar-brand text-white"
              style={{ textDecoration: "none" }}
            >
              BroCode
            </Link>

            {/* Toggler for small screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/feed" className="nav-link">
                    Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/trending" className="nav-link">
                    Trending Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/topusers" className="nav-link">
                    Top Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/topusers" element={<TopUsers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
