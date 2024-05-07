import React, { ReactNode, memo, useEffect, useMemo, useState } from "react";
import "./index.less";

interface MenuItemProps {
  name: string;
  path: string;
}

const MenuItem = memo<MenuItemProps>(({ name, path }) => {
  const bgColorList = useMemo<string[]>(() => {
    let list: string[] = [];
    for (let i = 0; i < 4; i++) {
      let color = Math.random().toString(16).slice(2, 8).padEnd(6, "0");
      list.push(color);
    }
    return list;
  }, []);

  const itemTag = useMemo<string>(() => {
    const enList = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    return (
      enList[Math.floor(Math.random() * 26)] +
      enList[Math.floor(Math.random() * 26)]
    );
  }, []);

  return (
    <div className="menu_item_com">
      <div className="menu_item_com_bg">
        {bgColorList.map((item, index) => (
          <div
            style={{
              background: `#${item}`,
            }}
            key={index}
          ></div>
        ))}
      </div>
      <div className="menu_item_com_title">
        <div>{name}</div>
        <div>{itemTag}</div>
      </div>
    </div>
  );
});

export default MenuItem;
