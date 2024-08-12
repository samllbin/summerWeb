import React, { useState } from "react";
import style from "./assets/index.module.css";
import Carousel from "@components/carousel";
import MenuTab from "@components/menu";
import Content from "@components/content";
import Article from "@components/article";

export default function App() {
  const [current, setCurrent] = useState("1");
  return (
    <div>
      <Carousel />
      <div className={style.layout}>
        <MenuTab setCurrent={setCurrent} current={current} />
        <Content />
        <a href="http://192.168.241.67:8501/">1222222222</a>
      </div>
    </div>
  );
}
