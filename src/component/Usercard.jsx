/** @format */

import React, { useContext } from "react";
import "./usercard.css";
import { TransactionContext } from "../context/TransactionContext";

const Usercard = () => {
  const { current } = useContext(TransactionContext);
  return (
    <div>
      <div className="usercard">
        <div className="cont">
          <div className="imgbx">
            <img src="image/bloc.png" alt="blockchaine" />
          </div>
          <div className="contbx">
            <h3>user</h3>
            <h3>
              <span>ID:{current}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
