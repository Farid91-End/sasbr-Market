import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import catalog from "@/public/image/category2svg.svg";
import Image from "next/image";
import { NavigationMenuDemo } from "./navigation-menu";
import cart from "@/public/image/cart.svg";
import favourite from "@/public/image/favourite.svg";
import search from "@/public/image/search.svg";
import logo from "@/public/image/logo.jpg";

type Props = {};

const HeadNavbar = (props: Props) => {
  return (
    <div className="">
      <div className="max-w-[1240px] mx-auto ">
        <Navbar className="flex  ">
          <Link href="/">
            <NavbarBrand>
              <Image src={logo} alt="" className="w-[70px] rounded-[35px] " />
            </NavbarBrand>
          </Link>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <NavigationMenuDemo />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent>
            <NavbarItem>
              <div className="flex border rounded-[5px] text-[14px] ">
                <input
                  type="search"
                  className="p-2 w-[450px] rounded-[5px]"
                  placeholder="Искать товары и категории"
                />
                <div className="w-[83px] flex justify-center bg-[#F8F8F8]">
                  <Image src={search} alt="" />
                </div>
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <Button as={Link} color="primary" href="#" variant="flat">
              <NavbarItem className="hidden lg:flex hover:bg-[#F1F1F2] p-2 rounded-[8px]">
                <Image
                  src={favourite}
                  alt=""
                  className="w-[24px] mr-2 text-[14px]"
                />
                <h1 className="text-[14px] font-medium">
                  Избранное{" "}
                  <span className="text bg-red-500 p-1 text-[12px] text-white font-semibold ">
                    5
                  </span>
                </h1>
              </NavbarItem>
            </Button>
            <Button as={Link} color="primary" href="#" variant="flat">
              <NavbarItem className="flex hover:bg-[#F1F1F2] p-2 rounded-[8px]  ">
                <div className="">
                  <Image
                    src={cart}
                    alt=""
                    className="w-[24px] mr-2 text-[14px]"
                  />
                </div>
                <h1 className="text-[14px] font-medium">
                  Карзина{" "}
                  <span className="text bg-red-500 p-1 text-[12px] text-white font-semibold ">
                    10
                  </span>
                </h1>
              </NavbarItem>
            </Button>
          </NavbarContent>
        </Navbar>
      </div>
    </div>
  );
};

export default HeadNavbar;
