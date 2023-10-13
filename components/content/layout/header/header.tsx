"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import HeadNavbar from "./headNavbar";
import LawBar from "./LawBar";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto  pt-4">
        <HeadNavbar />
        <LawBar />
      </div>
    </div>
  );
};

export default Header;
