/** @format */

import React, { useState } from "react";

const ContractList = () => {
  const [list, setList] = useState([
    {
      id: "1",
      sender: "naruto",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-01.jpg",
      keyword: "here keyword",
    },
    {
      id: "2",
      sender: "naruto",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-02.jpg",
      keyword: "here keyword",
    },
    {
      id: "3",
      sender: "naruto",
      amount: "0.0002",
      message: "babbababbalalal",
      img: "image/img-03.jpg",
      keyword: "here keyword",
    },
    {
      id: "4",
      sender: "naruto",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-08.jpg",
      keyword: "here keyword",
    },
    {
      id: "5",
      sender: "Itatchi",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-04.jpg",
      keyword: "here keyword",
    },
    {
      id: "6",
      sender: "Itatchi",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-01.jpg",
      keyword: "here keyword",
    },
    {
      id: "7",
      sender: "naruto",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-05.jpg",
      keyword: "here keyword",
    },
    {
      id: "8",
      sender: "sasuke",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-06.jpg",
      keyword: "here keyword",
    },
    {
      id: "9",
      sender: "sasuke",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-07.jpg",
      keyword: "here keyword",
    },
    {
      id: "10",
      sender: "jiraya",
      amount: "0.0001",
      message: "babbababbalalal",
      img: "image/img-09.jpg",
      keyword: "here keyword",
    },
  ]);
  const [name, setName] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        placeholder="write the sender"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3 className="badge bg-danger m-2">your contract</h3>
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th className="text-light" scope="col">
                ID
              </th>
              <th className="text-light" scope="col">
                Sender
              </th>
              <th className="text-light" scope="col">
                Amount
              </th>
              <th className="text-light" scope="col">
                Message
              </th>
              <th className="text-light" scope="col">
                keyword
              </th>
              <th className="text-light" scope="col">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((p) => {
                if (name === "") {
                  return p;
                } else if (
                  p.sender.toLowerCase().includes(name.toLowerCase())
                ) {
                  return p;
                }
              })
              .map((p) => {
                return (
                  <tr key={p.id}>
                    <th className="text-light" scope="row">
                      {p.id}
                    </th>
                    <td className="text-light">{p.sender}</td>
                    <td className="text-light">{p.amount}</td>
                    <td className="text-light">{p.message}</td>
                    <td className="text-light">{p.keyword}</td>
                    <td>
                      <img src={p.img} alt="" width={50} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractList;
