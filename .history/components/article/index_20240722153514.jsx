import React from "react";
import style from "./index.module.css";

export default function Article({ type, imgURL }) {
  return (
    <div className={style.layout}>
      {type === "all" ? (
        <div>
          <img
            src="../../public/大气组成.png"
            alt="article"
            className={style.allImage}
          />
          <div className={style.allTitle}>Title</div>
        </div>
      ) : (
        // 这里可以添加当 type 不为 "all" 时你想渲染的内容
        <p>显示特定类型的文章</p>
      )}
    </div>
  );
}
