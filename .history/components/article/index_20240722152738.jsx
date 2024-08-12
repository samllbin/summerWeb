import React from "react";

export default function Article({ type, img }) {
  return (
    <div>
      {type === "all" ? (
        <img src={img} alt="article" />
      ) : (
        // 这里可以添加当 type 不为 "all" 时你想渲染的内容
        <p>显示特定类型的文章</p>
      )}
    </div>
  );
}
