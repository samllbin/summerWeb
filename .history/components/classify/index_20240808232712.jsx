import React from "react";
import { Input } from "antd";
import style from "./index"

const { Search } = Input;

export default function Classify() {
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        // onSearch={onSearch}
        className={}
      />
    </div>
  );
}
