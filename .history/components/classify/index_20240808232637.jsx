import React from "react";
import { Input } from "antd";

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
        onSearch={value => console.log(value)}
      />
    </div>
  );
}
