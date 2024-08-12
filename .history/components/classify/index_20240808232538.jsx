import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function Classify() {
  return <div>
    <Search placeholder="input search text" onChange={(e) => console.log(e)} />
  </div>;
}
