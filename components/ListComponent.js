import Link from "next/link";

export default function ListComponent({label,href}){
    return(
        <li className="pl-6 pt-3 pr-6 pb-3 cursor-pointer hover:text-orange-400 duration-500 w-full text-slate-50 text-sm"><Link href={"/home"}>Students</Link></li>
    );
}