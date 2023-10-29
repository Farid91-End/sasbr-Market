import ToolSidebar from "@/components/content/toolPage/sideBar";
import Link from "next/link";
import React from "react";

type Props = {};

const Tools = (props: Props) => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto ">
        <h1 className="text-[12px]  ">
          <Link href={"/"}>
            <span className="text-[#9B9B9B] ">Главная / </span>
          </Link>
          Электроинструменты
        </h1>
        <div className="pt-4 ">
          <div className=" ">
            <ToolSidebar />
          </div>
          <div>
            {/* <MainContent /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
