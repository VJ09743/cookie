import {router} from "next/client";
import Link from "next/link";
const confbut = "group-hover:text-3xl text-1xl px-4 hover:bg-neutral-400/30  group-hover:px-8 py-3 rounded-full  bg-neutral-400/20 text-white/60 group-hover:text-white transition-all duration-100";
export default function NaviBar() {

    return(
        <nav className=" flex hover:bg-blue-950/20 group hover:p-5 p-2 gap-2 justify-center hover:gap-6 transition-all duration-100  rounded-full backdrop-blur-sm top-5 hover:w-full fixed z-50 bg-black/20">
            {linkBut("/", "Home")}
            {linkBut("/games/cookie", "Cookie")}
        </nav>
    )
}

function linkBut(hrd, text) {
    return(<Link href={hrd}>
        <button className={confbut}>{text}</button>
    </Link>)

}
