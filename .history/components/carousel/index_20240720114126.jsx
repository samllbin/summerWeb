import React from "react";
import { Carousel } from "antd";
import style from "./index.module.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function carousel() {
  return (
    // <Carousel autoplay>
    //   <div>
    //     <h3 className={style.contentStyle}>1</h3>
    //   </div>
    //   <div>
    //     <h3 className={style.contentStyle}>2</h3>
    //   </div>
    //   <div>
    //     <h3 className={style.contentStyle}>3</h3>
    //   </div>
    //   <div>
    //     <h3 className={style.contentStyle}>4</h3>
    //   </div>
    // </Carousel>
    <Carousel autoplay>
      <div>
        <h3 className={style.contentStyle}>1</h3>
      </div>
      <div>
        <h3 className={style.contentStyle}>2</h3>
      </div>
      <div>
        <h3 className={style.contentStyle}>3</h3>
      </div>
      <div>
        <h3 className={style.contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
