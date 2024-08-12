import React, { useState } from "react";
import style from "./assets/index.module.css";
import Carousel from "@components/carousel";
import MenuTab from "@components/menu";
import Content from "@components/content";

export default function App() {
  const [current, setCurrent] = useState("1");
  const artical =
    current == "1"
      ? "治污降霾"
      : current == "2"
      ? "守护碧水"
      : current == "3"
      ? "守护净土"
      : "垃圾分类";
  return (
    <div>
      <div>
        <Carousel className={style.cou/>
      </div>
      <div className={style.layout}>
        <MenuTab setCurrent={setCurrent} current={current} />
        <Content artical={artical} />
      </div>
    </div>
  );
}
