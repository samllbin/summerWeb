import React from "react";
import { Menu } from "antd";

export default function index() {
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
