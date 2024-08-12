import React from "react";
import style from "./index.module.css";
import config from "./config";

export default function Content() {
  return (
    <div className={style.layout}>
      {config.filter((item) => {
        item.title === "治污降霾";
      })[0].value.map(item => {
         <h3>{item.subTitle</h3>
      })}
    </div>
  );
}
