import React from "react";
import { Menu } from "antd";
import { useState } from "react";

export default function index() {
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
