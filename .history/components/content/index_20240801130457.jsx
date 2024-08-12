import React from "react";
import style from "./index.module.css";
import config from "./config";

export default function Content({ artical }) {
  return (
    <div className={style.layout}>
      {config
        .filter((item) => {
          return item.title == artical;
        })[0]
        ?.value.map((item, index) => {
          return (
            <div key={index} className={style.text}>
              <h2 className={style.title}>{item?.subTitle}</h2>
              {
                item.content.map(text => {})
              }
              <img src={item.imageURL} alt="" className={style.image} />
            </div>
          );
        })}
    </div>
  );
}
