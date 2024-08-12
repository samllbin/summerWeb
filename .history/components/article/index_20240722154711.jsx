import React from "react";
import style from "./index.module.css";
import { RightOutlined } from "@ant-design/icons";

export default function Article({ type, imgURL }) {
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
      ) : (
        // 这里可以添加当 type 不为 "all" 时你想渲染的内容
        <p>显示特定类型的文章</p>
      )}
    </div>
  );
}
