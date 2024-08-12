import React from "react";
import { Carousel } from "antd";
import style from "./index.module.css";

export default function carousel() {
  return (
    <Carousel autoplay>
      <div>
        {/* <h3 className={style.contentStyle}>1</h3> */}
        <img src="../../public/QQ图片20240805123848.jpg" alt="" />
      </div>
      <div>
        {/* <h3 className={style.contentStyle}>2</h3> */}
        <img src="../../public/QQ图片20240805123914.jpg" alt="" />
      </div>
      <div>
        {/* <h3 className={style.contentStyle}>3</h3> */}
        <img src="../../public/QQ图片20240805123919.png" alt="" />
      </div>
      <div>{/* <h3 className={style.contentStyle}>4</h3> */}</div>
    </Carousel>
  );
}
