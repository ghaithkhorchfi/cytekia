/** @format */

import React from "react";
import { useState, useEffect, useContext } from "react";
import "./card.css";
import { TransactionContext } from "../context/TransactionContext";
import { adressTo } from "../utils/const";

const Card = () => {
  const [list, setList] = useState([
    {
      id: "1",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-01.jpg",
      owned: false,
    },
    {
      id: "2",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-02.jpg",
      owned: false,
    },
    {
      id: "3",
      name: "naruto",
      price: "0.0002",
      detail: "babbababbalalal",
      img: "image/img-03.jpg",
      owned: false,
    },
    {
      id: "4",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-08.jpg",
      owned: false,
    },
    {
      id: "5",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-04.jpg",
      owned: false,
    },
    {
      id: "6",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-01.jpg",
      owned: false,
    },
    {
      id: "7",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-05.jpg",
      owned: false,
    },
    {
      id: "8",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-06.jpg",
      owned: false,
    },
    {
      id: "9",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-07.jpg",
      owned: false,
    },
    {
      id: "10",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-09.jpg",
      owned: false,
    },
  ]);
  const { formData, setFormData, sendTransaction, current } =
    useContext(TransactionContext);
  const purchase = (p) => {
    console.log(p);
    setFormData({
      adressTo: adressTo,
      amount: p.price,
      keyword: "test",
      message: "test",
    });
    console.log(formData);
    if (
      !formData.adressTo |
      !formData.amount |
      !formData.message |
      !formData.keyword
    ) {
      console.log("please try again");
    } else {
      sendTransaction();
      let l = [...list];
      let ind = l.indexOf(p);
      l[ind].owned = true;
      setList(l);
    }
  };
  return (
    <React.Fragment>
      <div className="galery">
        {list.map((p) => {
          if (!current) {
            return (
              <div className="content" key={p.id}>
                <img src={p.img} alt="t-shirt" className="img" />
                <h3>{p.name}</h3>
                <p>{p.detail}</p>
                <img src="image/ethereum.png" alt="" width={50} />
                <h6>{p.price}</h6>
                <ul>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                </ul>
                <h3 className="badge bg-danger">please connect to wallet</h3>
              </div>
            );
          }
          return (
            <div className="content" key={p.id}>
              <img src={p.img} alt="t-shirt" className="img" />
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
              <img src="image/ethereum.png" alt="" width={50} />
              <h6>{p.price}</h6>
              <ul>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
              </ul>

              {!p.owned ? (
                <button
                  className=" but buy"
                  onClick={() => {
                    purchase(p);
                  }}
                >
                  buy now
                </button>
              ) : (
                <h3 className="badge bg-danger">Owned</h3>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Card;
