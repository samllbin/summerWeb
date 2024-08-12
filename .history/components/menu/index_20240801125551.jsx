import React from "react";
import { Menu } from "antd";
import { config } from "./config";
import style from "./index.module.css";

export default function MenuTab({ current, setCurrent }) {
  const onClick = (e) => {
    console.log("click ", e);
    console.log("e,key----------", e.key);
    setCurrent(e.key);
  };
  return (
    <div className={style.layout}>
      <Menu
        onClick={onClick}
        style={{ width: 256, fontSize: 15, paddingTop: 20 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={config}
      />
      <div className={style.backgroundImage}></div>
    </div>
  );
}
