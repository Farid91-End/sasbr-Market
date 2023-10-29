import Link from 'next/link';
import React from 'react'
import facebook from "@/public/image/facebook.svg"
import instagram from "@/public/image/instagram.svg"
import tiktok from "@/public/image/tiktok.svg";
import whatsapp from "@/public/image/whatsapp.svg"
import telegram from "@/public/image/telegram.svg"
import call from "@/public/image/call.svg";
import Image from 'next/image';



const footerMap: { title: string; links: { text: string; href: string }[] }[] =
  [
    {
      title: "Клиентам",
      links: [
        {
          text: "Как сделать заказ",
          href: "https://sabr.market/kak-sdelat-zakaz/",
        },
        { text: "Как оплатить", href: "https://sabr.market/kak-oplatit/" },
        {
          text: "Доставка, отмена и возврат",
          href: "https://sabr.market/dostavka-otmena-i-vozvrat/",
        },
        {
          text: "Заказывайте по оптовым ценам",
          href: "https://sabr.market/zakaz-optom/",
        },
      ],
    },
    {
      title: "Контакты",
      links: [
        { text: "info@sabr.market", href: "mailto:info@sabr.market"},
        {
          text: "г. Москва, метро теплый стан Новоясеневский проспект 1Б, корп. 2, РЫНОК 4-й этаж павильон 638",
          href: "https://yandex.tj/maps/213/moscow/chain/cinema_star/1374240076/filter/chain_id/1374240076/?indoorLevel=1&ll=37.510276%2C55.617168&sctx=ZAAAAAgBEAAaKAoSCY4G8BZItlFAEaJ%2BF7ZmhUNAEhIJ2XdF8L%2FtJUARJLcm3Zb4FEAiBgABAgMEBSgAOABA9q0HSAFqAnVhggETY2hhaW5faWQ6MTM3NDI0MDA3Np0BzcxMPaABAKgBAL0BuSSsrsIBBa6k0MkE6gEA8gEA%2BAEAggITY2hhaW5faWQ6MTM3NDI0MDA3NooCAJICAzIxM5oCDGRlc2t0b3AtbWFwc6oCTzEzNzQyNDAwNzYsODQ1NzU4OTM3LDMxNTkxNzE4ODA2LDc2NTEwNTQ5LDYwMDI3MzIsODMwODkxOTQ2LDI1NzUxODEzOTksNjAxMjIzMzCwAgE%3D&sll=37.510276%2C55.617168&sspn=0.011397%2C0.003955&z=16.91",
        },
        { text: "+7 915 486 92 92", href: "tel:+79154869292" },
      ],
    },
  ];

  const socials: { title: string; links: { image: any; href: string }[] }[] = [
    {
      title: "Sabr market в социальных сетях:",
      links: [
        {
          image: instagram,
          href: "https://www.instagram.com/sabrmarket/",
        },
        {
          image: tiktok,
          href: "https://www.tiktok.com/@sabrmarket",
        },
        {
          image: whatsapp,
          href: "https://wa.me/79154869292",
        },
        {
          image: telegram,
          href: "https://t.me/Sabronline",
        },
        {
          image: call,
          href: "tel:+79154869292",
        },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto  ">
      <div className="flex justify-between border-b-[1px] px-[20px] pb-12 border-[#5E6774] ">
        {footerMap.map(({ title, links }, key) => (
          <div key={key} className="w-[310px]">
            <p className="text-[15px] text-[#5E6774] dark:text-white font-semibold pb-[23.05px] ">
              {title}
            </p>
            <ul className="flex flex-col">
              {links.map(({ text, href }, key) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-[#4f5763] hover:text-[black] dark:text-[#999997]  text-[15px] font-light leading-[200%] hover:scale-[1.1]"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
        {socials.map(({ title, links }, key) => (
          <div key={key}>
            <p className="text-[15px] text-[#5E6774] dark:text-white font-semibold pb-[23.05px] ">
              {title}
            </p>
            <ul className="flex gap-3 ">
              {links.map(({ image, href }, key) => (
                <li key={key} className=' '>
                  <Link
                    href={href}
                    className="text-[#4f5763] hover:text-[black] dark:text-[#999997]  text-[15px] font-light leading-[200%] hover:scale-[1.1]"
                    >
                    <Image src={image} alt='' className='w-[32px]'/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
      <div className="py-[34.5px] flex justify-between">
        <div className="text-[15px] text-[#5E6774] font-medium dark:text-[white] ">
          Все права защищены &copy; {currentYear} "Сабр маркет"
        </div>
      </div>
    </div>
  );
}

export default Footer