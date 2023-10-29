"use client";

import * as React from "react";
import Link from "next/link";
import catalog from "@/public/image/category2svg.svg";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import electronics from "@/public/image/electronics.svg";
import books from "@/public/image/books.svg";
import parfume from "@/public/image/parfume.svg";
import nature from "@/public/image/nature.svg";
import clothes from "@/public/image/clothes.svg";

const components: {
  img: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    img: electronics,
    title: "Электронная и бытовая техника",
    href: "/tech",
    description: "Наушники и аксессуары",
  },
  {
    img: electronics,
    title: "Электроиструменты",
    href: "/tools",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    img: books,
    title: "Книги",
    href: "/books",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    img: parfume,
    title: "Парфюмерия",
    href: "/parfume",
    description: "Visually or semantically separates content.",
  },
  {
    img: nature,
    title: "Натуральная продукция",
    href: "/nproducts",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    img: nature,
    title: "Мусульманская аттрибутика",
    href: "/muslim",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    img: clothes,
    title: "Одежда и обувь",
    href: "/clothes",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className=" ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex  p-2 gap-x-2 ">
              <Image src={catalog} alt="" className="w-[24px]" />
              <h1 className="text-[#3333cc] ">Каталог</h1>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#F8F8F8]">
            <div className=" group-hover:bg-slate-500 ">
              <ul className="grid w-[400px] gap-3  p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component, key) => (
                  <div
                    key={key}
                    className="flex  hover:bg-[#d7d4d4] p-[4px] hover:rounded-xl"
                  >
                    <Image src={component.img} alt="" />
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className=" "
                    >
                      {/* {component.description} */}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
