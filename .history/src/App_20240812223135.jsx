import React, { useState } from "react";
import style from "./assets/index.module.css";
import Carousel from "@components/carousel";
import MenuTab from "@components/menu";
import Content from "@components/content";
import Classify from "@components/classify";

export default function App() {
  const [current, setCurrent] = useState("1");
  const artical =
    current == "1"
      ? "治污降霾"
      : current == "2"
      ? "守护碧水"
      : current == "3"
      ? "守护净土"
      : current == "4"
      ? "垃圾分类"
      : "分类指南";
  return (
    <div>
      <div className={style.courseLayout}>
        <Carousel />
      </div>
      <div className={style.layout}>
        <MenuTab setCurrent={setCurrent} current={current} />
        {current !== "5" ? <Content artical={artical} /> : <Classify />}
      </div>
    </div>
  );
}
