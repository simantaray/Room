import React from "react";
import Image from "next/image";

export default function LocCard({ img, loc, dist }) {
  return (
    <div className="p-2 flex items-center m-2 mt-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-100 ease-out">
      <div className=" relative h-16 w-16">
        <Image
          alt="expimage"
          className="rounded-lg"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="">
        <h2>{loc}</h2>
        <h3 className="text-gray-500">{dist}</h3>
      </div>
    </div>
  );
}
