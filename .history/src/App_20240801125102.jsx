import React, { useState } from "react";
import style from "./assets/index.module.css";
import Carousel from "@components/carousel";
import MenuTab from "@components/menu";
import Content from "@components/content";
import Article from "@components/article";



export default function App() {
  const [current, setCurrent] = useState("1");
  const 
  return (
    <div>
      <Carousel />
      <div className={style.layout}>
        <MenuTab setCurrent={setCurrent} current={current} />
        <Content />
      </div>
    </div>
  );
}
