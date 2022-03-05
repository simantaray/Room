import React from "react";
import Image from "next/image";

export default function LivCard({ img, title }) {
  return (
    <div className="cursor-pointer ">
      <div  className="relative h-80 w-80 hover:scale-105 transition duration-100 ease-out">
        <Image alt="expimage" className="rounded-xl" src={img} layout="fill" />
      </div>

      <h3 className="text-2xl mt-4">{title}</h3>
    </div>
  );
}
