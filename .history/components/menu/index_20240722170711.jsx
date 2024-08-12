import React from "react";
import { Menu } from "antd";
import { config } from "./config";
import style from "./index.module.css";

export default function MenuTab({ current, setCurrent }) {
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 256, fontSize: 15, paddingTop: 20 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={config}
      />
      <div className={style.backgroundImage}>
        <img
          src="../../public/草(1).jpg"
          alt=""
          style={{ width: 40, marginRight: -5 }}
        />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
        <img src="../../public/草(1).jpg" alt="" style={{ width: 40 }} />
      </div>
    </div>
  );
}
