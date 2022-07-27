/** @format */

import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
import "./nav.css";
import Usercard from "./Usercard";

const Navbar = () => {
  const { connectWallet, current, disconnectWallet } =
    useContext(TransactionContext);
  return (
    <React.Fragment>
      <div className="hero">
        <div className="d-flex justify-content-between">
          <img src="image/logo.webp" alt="logo" className="logo" />
          <nav className="navbar  navbar-expand-lg  ">
            <div className="container-fluid ">
              <a className="navbar-brand text-light ">Cytekia</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/detail"
                    >
                      detail
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light">Features</a>
                  </li>
                  <li className="nav-item text-light">
                    <a className="nav-link text-light">Pricing</a>
                  </li>
                  <li className="nav-item text-light">
                    {!current ? (
                      <button
                        className="btn btn-outline-dark"
                        onClick={connectWallet}
                      >
                        login
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark"
                        onClick={disconnectWallet}
                      >
                        logout
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="con">
          <Usercard />
          <h1 className="title">NFT MarketPlace</h1>
          {!current ? (
            <button className="btn btn-outline-dark" onClick={connectWallet}>
              connect To wallet
            </button>
          ) : (
            <button className="btn btn-outline-dark" onClick={disconnectWallet}>
              disconnect
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
