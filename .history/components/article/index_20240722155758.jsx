import React from "react";
import style from "./index.module.css";
import { RightOutlined } from "@ant-design/icons";

export default function Article({ type, imgURL, title }) {
  return (
    <div className={style.layout}>
      {type === "all" ? (
        <div className={style.allLayout}>
          <img
            src="../../public/大气组成.png"
            alt="article"
            className={style.allImage}
          />
          <div className={style.allTitle}>
            治污降霾
            <RightOutlined style={{ color: "#d55c19", marginLeft: 20 }} />
          </div>
        </div>
      ) : type === "right" ? (
        <div className={style.rightLayout}>
          <img
            src="../../public/大气组成.png"
            alt=""
            className={style.rightImage}
          />
          <div className={style.rightTitle}>
            11111
            <RightOutlined style={{ color: "#d55c19", marginLeft: 20 }} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
