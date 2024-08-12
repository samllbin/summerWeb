import React from "react";
import style from "./index.module.css";
import config from "./config";

export default function Content() {
  return (
    <div className={style.layout}>
      {config
        .filter((item) => {
          return item.title === "治污降霾";
        })[0]
        ?.value.map((item, index) => {
          return (
            <div key={index} className={style.text}>
              <h3>{item?.subTitle}</h3>
              <div>{item.content}</div>;
              <img src={item.imageURL} alt="" />
            </div>
          );
        })}
    </div>
  );
}
