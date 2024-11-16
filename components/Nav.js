import Link from "next/link";
import {Bebas_Neue} from "next/font/google"
import {HiMenuAlt3} from "react-icons/hi"
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const bebas_neue = Bebas_Neue(
    {
        subsets:["latin"],
        weight: "400"
    }
)


export function Nav () {
    return(
        <>
        <nav className="h-[60px] bg-blue-600 flex w-full justify-between items-center sticky px-2 md:px-4 lg:px-16 shadow-md ">
            <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
                <li className={`${bebas_neue} hidden text-md lg:text-2xl text-white lg:block `}><Link href="/">EarlyCare</Link></li>
                <li><HiMenuAlt3 className="text-white text-md lg:text-2xl"/></li>
                
            </ul>
            <ul className="flex hidden lg:block">
                <li className=" text-2xl text-white">Nyanya General Hospital</li>
                
            </ul>
            <ul className="flex gap-4 text-lg lg:text-2xl text-white ">
                <li ><Link href="#"><FaRegEnvelope /></Link></li>
                <li ><Link href="#"><IoMdNotificationsOutline /></Link></li>
                <li><Link href="#"><IoIosSettings /></Link></li>
                <li><Link href="#"><FaUser /></Link></li>
                
            </ul>
        </nav>
        <nav className="grid grid-col-1 ">
            <ul className="text-black text-lg h-[60px] w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Dashboard</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Patient</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Encounter</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Billing</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">External Patient Billing</Link></li>
            </ul>
            <ul className="text-black -1 text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Admission</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px]  w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Laboratory</Link></li>
            </ul>
            <ul className="text-black text-lg h-[60px] w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Radiology</Link></li>
            </ul>
            <ul className="text-black text-lg h-[60px] w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Physiotherapy</Link></li>
            </ul>
            <ul className="text-black  text-lg h-[60px] w-[300px] br-[20px] hover:bg-sky-600  br-gray-800 ">
                <li className="h-[40px] ml-4"><Link href="#">Users</Link></li>
            </ul>
           
            

            

        </nav>
        </>
    )
}