import React from "react";
import { Carousel } from "antd";
import style from "./index.module.css";
import img1 from "../../public/QQ图片20240805123848.jpg";
import img2 from "../../public/QQ图片20240805123914.jpg";
import img3 from "../../public/QQ图片20240805123848.jpg";
import img4 from "../../public/QQ图片20240805123848.jpg";

export default function carousel() {
  return (
    <Carousel autoplay adaptiveHeight arrows className={style.layout}>
      <div>
        {/* <h3 className={style.contentStyle}>1</h3> */}
        <img src={img1} alt="" className={style.imgStyle} />
      </div>
      <div>
        {/* <h3 className={style.contentStyle}>2</h3> */}
        <img src={img2} alt="" className={style.imgStyle} />
      </div>
      <div>
        {/* <h3 className={style.contentStyle}>3</h3> */}
        <img
          src="../../public/QQ图片20240808170818.jpg"
          alt=""
          className={style.imgStyle}
        />
      </div>
      <div>
        {/* <h3 className={style.contentStyle}>4</h3> */}
        <img
          src="../../public/QQ图片20240805123922.png"
          alt=""
          className={style.imgStyle}
        />
      </div>
    </Carousel>
  );
}
