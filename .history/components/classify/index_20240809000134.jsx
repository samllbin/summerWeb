import React from "react";
import { Input, Modal } from "antd";
import style from "./index.module.css";
import { useState } from "react";
import axios from "axios";

const { Search } = Input;

export default function Classify() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchData, setSearchData] = useState();
  function onSearch(value) {
    axios
      .get("https://www.mxnzp.com/api/rubbish/type", {
        params: {
          name: value,
          app_id: "kklibjheuxsof2np",
          app_secret: "aYN7hlArR63rcZZNs9f9EUyLtPKWbE9m",
        },
      })
      .then((res) => {
        setSearchData(res.data.data);
        console.log(res.data.data);
        if (value && res.data.data) {
          showModal();
        }
      });
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
      <div>
        <Modal
          title="查询结果"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            {searchData?.aim.goodsName}为{searchData?.aim.goodsType}
          </p>
          <div></div>
        </Modal>
      </div>
    </div>
  );
}
