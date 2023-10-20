"use client";

import { useState } from "react";
import SwiperArea from "@/components/swiper/swiper";
import Image from "next/image";
import arrowRight from "@/public/image/arrowRight.svg";
import kinoki from "@/public/image/kinoki.webp";
import zamzam from "@/public/image/zamzam.jpg";
import naushnik from "@/public/image/naushnik.jpg";
import futbolka from "@/public/image/futbolka.jpg";
import joynamoz from "@/public/image/joynamoz.jpg";
import Bukhari from "@/public/image/Bukhari.jpeg";
import duxi from "@/public/image/duxi.png";
import duxi2 from "@/public/image/duxi2.jpg";
import duxi3 from "@/public/image/duxi3.jpg";
import gaymarit from "@/public/image/gaymarit.jpg";
import minoxidil from "@/public/image/minoxidil.jpg";
import star from "@/public/image/star.svg";
import addCart from "@/public/image/addCart.svg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import heart from "@/public/image/heart.svg";
import heart2 from "@/public/image/heartFill.svg";

const arr = [
  {
    img: kinoki,
    title: "Миноксидил для бороды (Minoxidil Kirkland Signature) 5% — 6 флакон",
    price: 1250,
    oldPrice: 1300,
    vote: 4.9,
  },
  {
    img: zamzam,
    title: "Зам Зам вода 0.5 л",
    price: 399,
    oldPrice: 480,
    vote: 5,
  },
  {
    img: naushnik,
    title: "беспроводной наушник м10",
    price: 399,
    oldPrice: 480,
    vote: 4.2,
  },
  {
    img: futbolka,
    title: "Футболки САБР",
    price: 399,
    oldPrice: 480,
    vote: 3.9,
  },
  {
    img: joynamoz,
    title: "Коран на узбекском Куръони Карим маъноларининг таржима ва тафсири",
    price: 399,
    oldPrice: 480,
    vote: 4.5,
  },
  {
    img: Bukhari,
    title: "САХИХ аль-БУХАРИ Часть 1-2",
    price: 399,
    oldPrice: 480,
    vote: 4.2,
  },
  {
    img: duxi,
    title:
      "CHELSEA MAN ЧЕЛСИ Арабские масляные духи 6 мл от Аль Рехаб AL REHAB",
    price: 399,
    oldPrice: 480,
    vote: 2.5,
  },
  {
    img: duxi2,
    title: "BLUE БЛЮ 6 МЛ АРАБСКИЕ МУЖСКИЕ МАСЛЯНЫЕ ДУХИ ОТ АЛЬ РЕХАБ AL REHAB",
    price: 399,
    oldPrice: 480,
    vote: 3.5,
  },
  {
    img: duxi3,
    title: "BLACK HORSE АРАБСКИЕ МАСЛЯНЫЕ ДУХИ 6 МЛ ОТ АЛЬ РЕХАБ AL REHAB",
    price: 399,
    oldPrice: 480,
    vote: 4.9,
  },
  {
    img: gaymarit,
    title: "«Гайморит» — самые эффективные средства",
    price: 399,
    oldPrice: 480,
    vote: 4.1,
  },
  {
    img: minoxidil,
    title: "Миноксидил + Мезороллер",
    price: 399,
    oldPrice: 480,
    vote: 4.0,
  },
];

export default function Home() {
  const [heartStates, setHeartStates] = useState(Array(arr.length).fill(false));

  const toggleHeart = (index: any) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };
  return (
    <div className="py-[52px]">
      <div>
        <SwiperArea />
      </div>
      <div className="popular flex text-[28px] font-bold pt-[48px] w-[170px] ">
        Популярное <Image src={arrowRight} alt="" className="m-auto " />
      </div>
      <div className="grid grid-cols-5 gap-x-[20px] gap-y-[40px] ">
        {arr.map((e, key) => (
          <div
            key={key}
            className="group cursor-pointer px-[10px] hover:shadow-lg flex flex-col justify-between rounded-[8px] p-2 h-[362px] "
          >
            <div>
              <div className="relative">
                <Image
                  src={e.img}
                  alt=""
                  className="rounded-[8px] group-hover:scale-[1.03] transition-all group-hover:transition-all"
                />
                <div className="">
                  <Image
                    src={heartStates[key] ? heart2 : heart}
                    alt=""
                    className="absolute top-1 right-1 scale-[0.75] cursor-pointer "
                    onClick={() => toggleHeart(key)}
                  />
                </div>
              </div>
              <h1 className=" text-[12.8px] pt-[12px] line-clamp-2 line-ellipsis">
                {e.title}
              </h1>
              <div className="flex py-[6px] ">
                <Image src={star} alt="" className=" " />
                <h1 className="text-[12px] font-light ">{e.vote}</h1>
              </div>
            </div>
            <div className="flex justify-between  px-2  ">
              <div className="flex gap-x-[7px] my-auto ">
                <h1 className="text-[14px] font-medium">{e.price}₽</h1>
                <h1 className="text-[12px] text-[#757575] ">
                  <s>{e.oldPrice}₽</s>
                </h1>
              </div>
              <Button className="p-2 rounded-[30px] ">
                <Image src={addCart} alt="" className="w-[34px] " />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">app/page.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Docs{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Learn{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Templates{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Explore the Next.js 13 playground.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Deploy{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>
