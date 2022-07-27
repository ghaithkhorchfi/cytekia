/** @format */

import React, { useState } from "react";

const Detail = () => {
  const [list, setList] = useState([
    {
      id: "1",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-01.jpg",
      owned: true,
    },
    {
      id: "2",
      name: "naruto",
      price: "0.0001",
      detail: "babbababbalalal",
      img: "image/img-02.jpg",
      owned: true,
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
  return (
    <div className="container">
      <h3 className="badge bg-danger">Owned product</h3>
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th className="text-light" scope="col">
                ID
              </th>
              <th className="text-light" scope="col">
                Name
              </th>
              <th className="text-light" scope="col">
                Price
              </th>
              <th className="text-light" scope="col">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((p) => {
                if (p.owned == true) {
                  return p;
                }
              })
              .map((p) => {
                return (
                  <tr key={p.id}>
                    <th className="text-light" scope="row">
                      {p.id}
                    </th>
                    <td className="text-light">{p.name}</td>
                    <td className="text-light">{p.price}</td>
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

export default Detail;
