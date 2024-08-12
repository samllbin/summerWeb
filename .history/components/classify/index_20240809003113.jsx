import React from "react";
import FlipCard from "../cards";
import { Input, Modal } from "antd";
import style from "./index.module.css";
import { useState } from "react";
import axios from "axios";

const { Search } = Input;

export default function Classify() {
  const cars = [
    {
      imageUrl: "../../public",
      name: "Black Coupe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      imageUrl: "https://i.ibb.co/7C3nkfr/niklas-du-EI1op-VNk4yg-unsplash.jpg",
      name: "Porsche",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      imageUrl:
        "https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg",
      name: "Orange Lambogini",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
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
          cancelText="取消"
          okText="确认"
        >
          <p>
            {searchData?.aim.goodsName}为{searchData?.aim.goodsType}
          </p>
          {searchData?.recommendList.length ? (
            <div>
              <p style={{ color: "red" }}>联想产物有：</p>
              <div style={{ marginLeft: 20 }}>
                {searchData?.recommendList.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.goodsName}为{item.goodsType}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
      <div className={style.app}>
        <h1>Our Cars</h1>
        <div className={style.carContainer}>
          {cars.map((car, index) => (
            <FlipCard
              key={index}
              imageUrl={car.imageUrl}
              name={car.name}
              description={car.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
