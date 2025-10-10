
import Link from "next/link";

const confbut = "group-hover:text-3xl text-1xl px-4 hover:bg-neutral-400/30  group-hover:px-8 py-3 rounded-full  bg-neutral-400/20 text-white/60 group-hover:text-white transition-all duration-100";
export default function NaviBar() {

    return(
        <nav className=" flex hover:bg-black/25 group hover:p-5 p-2 gap-2 justify-center hover:gap-6 transition-all duration-100  rounded-full backdrop-blur-sm top-5 hover:w-98/100 fixed z-50 bg-black/20">
            {linkBut("/", "Home")}
            <details className="relative">
                <summary className={confbut + " cursor-pointer list-none"}>
                    Games▽
                </summary>

                <div className="absolute left-0 mt-2 items-center gap-6 not-group-hover:collapse bg-black/20 rounded-lg shadow-lg flex flex-col p-2 z-50">
                    {linkBut("/games/cookie", "Clicker")}
                </div>
            </details>
        </nav>
    )
}

function linkBut(hrd, text) {
    return(<Link href={hrd}>
        <button className={confbut}>{text}</button>
    </Link>)


}
