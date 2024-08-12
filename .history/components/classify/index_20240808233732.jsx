import React from "react";
import { Input } from "antd";
import style from "./index.module.css";
import SearchReasult from "../searchReasult";

const { Search } = Input;

export default function Classify() {
    function onSearch(value) {
        
    }
  return (
    <div className={style.mainLayout}>
      <Search
        placeholder="请输入想要查询的垃圾名称"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        className={style.searchButton}
      />
    </div>
  );
}
