import React from "react";
import { Input } from "antd";
import style from "./index.module.css";
import { useState } from "react";
import { Button, Modal } from "antd";

const { Search } = Input;

export default function Classify() {
  function onSearch(value) {
    showModal();
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}
