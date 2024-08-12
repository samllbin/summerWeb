import React, { useState } from "react";
import style from "./assets/index.module.css";
import Carousel from "@components/carousel";
import MenuTab from "@components/menu";
import Content from "@components/content";
import Article from "@components/article";



export default function App() {
  const [current, setCurrent] = useState("1");
  const artical = current == "1"? "治污降霾" : current == "2"? "防汛救灾" : current == "3"? "防汛救灾" : current == "4"? "防汛救灾" : current == "5"?
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
