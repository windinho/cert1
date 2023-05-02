import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import "./Certificate.scss";

export default function Certificate() {
  const [data, setData] = useState([]);

  const formatDate = (createdAt) => {
    let date = new Date(createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    axios
      .get("https://6448accae7eb3378ca335cf3.mockapi.io/api/v1/certificate")
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="certificate">
      <img
        className="awards"
        src="https://www.onlygfx.com/wp-content/uploads/2022/04/blank-gold-badge-label-5.png"
        width="100px"
        alt=""
      />
      <div className="certificate-bg">
        <div className="certificate-content">
          <h1 className="title">
            Certificate
            <div className="small">of appreciation</div>
          </h1>
          <h2 className="sub-title">PROUDLY PRESENTED TO</h2>
          <h3 className="name">{data.name || <Skeleton width="50%" />}</h3>
          <p className="desc">
            For the outstanding completion of {data.course || "..."} on the{" "}
            <br /> NOLTE FZE LEARNING PLATFORM
          </p>
          <div className="flex">
            <div className="col">
              <div className="top">
                <strong>{data.manager || <Skeleton width="50%" />}</strong>
                <div>Training Manager</div>
              </div>
              <div className="date">
                Dubai,{" "}
                {data.createdAt ? (
                  formatDate(data.createdAt)
                ) : (
                  <Skeleton width="50%" />
                )}
              </div>
            </div>
            <div className="col">
              <div className="top">
                <strong>{data.md || <Skeleton width="50%" />}</strong>
                <div>Managing Director</div>
              </div>
              <div className="date">
                Dubai,
                {data.createdAt ? (
                  formatDate(data.createdAt)
                ) : (
                  <Skeleton width="50%" />
                )}
              </div>
            </div>
          </div>
          <img
            className="nolte"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nolte_K%C3%BCchen_logo.svg/1280px-Nolte_K%C3%BCchen_logo.svg.png"
            alt="nolte"
          />
        </div>
      </div>
    </div>
  );
}
