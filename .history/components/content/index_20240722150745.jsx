import React from "react";
import style from "./index.module.css";

export default function Content() {
  return (
    <div className={style.layout}>
      <span>
        大气是由混合气体、水汽和杂质组成的。干洁大气主要由78%的氮气、21%的氧气、0.93%的稀有气体、0.04%的二氧化碳以及0.03%的其他物质组成。
      </span>
      <img src="../../public/大气组成.png" alt="" />
    </div>
  );
}
