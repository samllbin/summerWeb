import React, { useState } from "react";
import Carousel from "@components/carousel/index";
import MenuTab from "@components/menu/MenuTab";
import Content from "../components/content";

export default function App() {
  const [current, setCurrent] = useState("1");
  return (
    <div>
      <Carousel />
      <MenuTab setCurrent={setCurrent} current={current} />
    </div>
  );
}
