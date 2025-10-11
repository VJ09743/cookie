"use client"
import Link from "next/link";

import MobileDetect from "mobile-detect";
import {useEffect} from "react";
const confbut = "group-hover:text-3xl text-1xl px-4 hover:bg-neutral-400/30  group-hover:px-8 py-3 rounded-full z-51 bg-neutral-400/20 text-white/60 group-hover:text-white transition-all duration-100";
export default  function NaviBar() {
    let isDesktop = true;
    useEffect(() => {
        const md = new MobileDetect(navigator.userAgent);
        const isMobile = !!md.mobile();
        const isTablet = !!md.tablet();
        isDesktop = (!isMobile && !isTablet);
    }, []);

    return(
        <nav className={` flex bg-black/30 group hover:p-5 p-2 gap-2 justify-items-center justify-center hover:gap-6 transition-all duration-100  rounded-full backdrop-blur-sm top-5 hover:w-98/100 fixed z-50  ${isDesktop?`not-hover:bg-black/15`:``}`}>
            {linkBut("/", "Home")}
            <details className={`relative `}>
                <summary className={confbut + " cursor-pointer list-none"}>
                    Games▽
                </summary>

                <div className={`absolute mt-2 items-center gap-6 left-1/2 -translate-x-1/2 bg-black/20 rounded-lg shadow-lg flex flex-col p-2 z-52 ${isDesktop?`not-group-hover:collapse`:``} `}>
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
