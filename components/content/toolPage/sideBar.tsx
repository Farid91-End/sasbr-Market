import React from "react";

type Props = {};

const sideBarUl = [
  "Наушники и Bluetooth гарнитуры",
  "Умные часы и браслеты",
  "Видеокамеры и камеры",
  "Универсальные внешние аккумуляторы",
  "Колонки",
  "Аксессуары для мобильных",
  "Другие аксессуары",
  "Инструменты для парикмахеров",
];

const ToolSidebar = (props: Props) => {
  return (
    <div className="w-[272px]">
      <h1 className="text-[#212121] font-semibold ">Категории</h1>
      <div className="ml-4 text-[#5A5A5A] my-3 ">
        <ul>
          {sideBarUl.map((e, key) => (
            <li
              key={key}
              className="pl-4 py-2 text-[14px] hover:bg-[#F2F4F7] hover:rounded-[8px] cursor-pointer "
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-[#212121] font-semibold ">Цена</h1>
    </div>
  );
};

export default ToolSidebar;
