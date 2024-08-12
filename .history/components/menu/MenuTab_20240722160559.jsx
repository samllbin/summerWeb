import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { config } from "./config";

export default function MenuTab({ current, setCurrent }) {
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 256, height: 500 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={config}
      />
    </div>
  );
}
