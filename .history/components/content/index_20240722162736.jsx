import React from "react";
import style from "./index.module.css";
import config from "./config";

export default function Content() {
  return (
    <div className={style.layout}>
      {config.map((item, index) => {
        return (
          <div className={style.item} key={index}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
