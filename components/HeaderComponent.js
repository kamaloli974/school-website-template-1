"use client"
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx";
import {useState} from "react";

function HeaderComponent(){
    const [display,setDisplayMenu]=useState("hidden");
    const handleHamburgerClick=(event)=>{
        if (display==="hidden"){
            setDisplayMenu("block")
        }else{
            setDisplayMenu("hidden");
        }
    }


    return(
        <div className="relative">
            <div className="flex sm:flex lg:hidden md:hidden justify-end text-2xl p-2 mt-2  text-blue-800 font-bold" onClick={handleHamburgerClick} >
                <span className="hover:text-blue-900 active:text-purple-600 duration-400" ><RxHamburgerMenu/></span>
            </div>

            <div className={"p-2 shadow-md shadow-slate-900 bg-purple-800/90 md:bg-purple-800 lg:bg-purple-800 p-2 " +
                "text-slate-50 fixed z-10 left-0 right-0 md:static lg:static lg:block md:block "+display}>
                <ul className="flex flex-col md:flex-row lg:flex-row justify-around items-center w-full">
                    <li className="mt-4 mb-4 cursor-pointer mt-4 cursor-pointer hover:text-orange-500 duration-300">
                        <Link href="/about">Home</Link></li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Faculty</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Programs</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Facilities</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Notices</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Events</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Gallery</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Contact</li>
                    <li className="mt-4 mb-4 cursor-pointer hover:text-orange-500 duration-300">Students</li>
                </ul>
            </div>
        </div>
    );
}
export default HeaderComponent;