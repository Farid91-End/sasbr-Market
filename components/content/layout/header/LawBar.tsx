import Link from "next/link";
import React from "react";

type Props = {};
const arr = [
  { title: "Электроника и бытовая техника", href: "/tech" },
  { title: "Электроинструменты", href: "/tools" },
  { title: "Книги", href: "/books" },
  { title: "Парфюмерия", href: "/parfume" },
  { title: "Натуральная продукция", href: "/nproducts" },
  { title: "Мусульманская аттрибутика", href: "/muslim" },
  { title: "Одежда и обувь", href: "/clothes" },
];

const LawBar = (props: Props) => {
  return (
    <div className="flex py-[19px] gap-x-[19px] ">
      {arr.map((e, key) => (
        <div key={key}>
          <Link href={e.href}>
            <h1 className="text-[14px] text-[#636363] hover:text-[#212121] hover:font-medium ">
              {e.title}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LawBar;
