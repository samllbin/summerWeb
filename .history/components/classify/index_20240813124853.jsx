import React from "react";
import FlipCard from "../cards";
import { Input, Modal, FloatButton } from "antd";
import style from "./index.module.css";
import { useState } from "react";
import axios from "axios";
import { QuestionCircleOutlined } from "@ant-design/icons";
import kehuishou from "../../public/可回收标志.png";
import chuyu from "../../public/厨余标志.png";
import bukehuishou from "../../public/不可回收标志.png";
import youhai from "../../public/有害标志.png";

const { Search } = Input;

export default function Classify() {
  const cards = [
    {
      imageUrl: kehuishou,

      name: "可回收垃圾",
      description:
        "可回收物就是再生资源，指生活垃圾中未经污染、适宜回收循环利用的废物。 主要包括废弃电器电子产品、废纸张、废塑料、废玻璃、废金属等五类，是现阶段生活垃圾分类的主要工作和影响垃圾减量的重要因素。",
    },
    {
      imageUrl: chuyu,
      name: "厨余垃圾",
      description:
        "厨余垃圾是指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾，包括丢弃不用的菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头（鸡骨、鱼刺类）等，其主要来源为家庭厨房、餐厅、饭店、食堂、市场及其他与食品加工有关的行业。",
    },
    {
      imageUrl: bukehuishou,
      name: "不可回收垃圾",
      description:
        "不可回收垃圾指除 可回收垃圾 之外的垃圾，常见的有在 自然条件 下容易分解的垃圾，如烟头、煤渣、 建筑垃圾 、油漆颜料、食品 残留物 等废弃后没有多大利用价值的物品",
    },
    {
      imageUrl: youhai,
      name: "有害垃圾",
      description:
        "常见的有害垃圾包括废灯管、废油漆、杀虫剂、废弃化妆品、过期药品、废电池、废灯泡、废水银温度计等，有害垃圾需按照特殊正确的方法安全处理。",
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
        enterButton="搜索"
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
          {searchData?.aim ? (
            <p>
              {searchData?.aim?.goodsName}为{searchData?.aim?.goodsType}
            </p>
          ) : null}
          {searchData?.recommendList.length ? (
            <div>
              <p style={{ color: "red" }}>联想产物有：</p>
              <div style={{ marginLeft: 20 }}>
                {searchData?.recommendList.map((item, index) => {
                  return (
                    <div key={index}>
                      {item?.goodsName}为{item?.goodsType}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
      <div className={style.app}>
        <h1>常见的垃圾举例</h1>
        <div className={style.carContainer}>
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              imageUrl={card.imageUrl}
              name={card.name}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ right: 24, width: 50, height: 50 }}
        onClick={() => {
          window.open("https://xxxxxxxxxxxxxxxx");
        }}
      />
    </div>
  );
}
