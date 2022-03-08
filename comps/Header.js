import { useState, useEffect } from 'react';
import React from "react";
import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"
import Link from 'next/link';export default function Header() {
 const [animateHeader, setAnimateHeader] = useState(false);
 useEffect(() => {
   const listener = () => {
    if (window.scrollY > 10) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
   };
   window.addEventListener('scroll', listener);   return () => {
     window.removeEventListener('scroll', listener);
   };
 }, []);
 return (
 <header className={`w-full backdrop-filter backdrop-blur-lg bg-white sticky top-0 z-10 trasition ease-in-out duration-200 ${
        animateHeader && "shadow-xl"
      }`}
    >
      
     <div className={`h-[100px] py-2 grid grid-cols-1 md:grid-cols-3 ${animateHeader && "py-2"} mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}>
          {/* main contant */}
        <div className="relative hidden md:flex items-center h-10 w-30 cursor-pointer my-auto z-50 trasition ease-in-out duration-100">
                <Image src="https://links.papareact.com/qd3" 
                alt="logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
        </div>
        <div className=' relative md:inline'>
            <div className={`hidden md:flex ${ animateHeader && "md:hidden"} trasition ease-in-out duration-5`}>
                <h1 className='px-10 py-2'>hi</h1>
                <h1 className='px-10 py-2'>holla</h1>
                <h1 className='px-10 py-2'>lola</h1>
            </div>
            
            <div className={`mt-[-20px] absolute md:mt-2.5 mr-auto ml-auto left-0 right-0 flex items-center border-2 rounded-full py-1 bg-white scale-100 md:scale-125 ${animateHeader && "md:scale-100 md:mt-[-20px] trasition ease-in-out duration-500"}`}>
                <input className="w-[110px] flex-grow pl-5 bg-transparent outline-none text-gray-700 placeholder-gray-700" type="text" placeholder="Search Place" />
                <SearchIcon className="inline-flex  mr-1 h-9 bg-red-400 rounded-full p-2 text-white cursor-pointer right-0"/>
            </div>
        </div>
        
        <div className="hidden md:flex items-center justify-end ">
                {/* <p className="hidden md:inline cu">Become a host</p> */}
                <GlobeAltIcon className="hidden md:h-8 text-red-400 pr-4 cursor-pointer"/>
            <div className="flex rounded-full bg-red-400 py-1 px-2 cursor-pointer">
                <MenuIcon className="h-8 text-white"/>
                <UserCircleIcon className="h-8 text-white"/>
            </div>
        </div>
    </div>
    
    </header>
 );
}