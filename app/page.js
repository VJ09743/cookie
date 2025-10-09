// just document the object structure in comments
// Tener = { id: number, cps: number, createdAt: number }

"use client";
import {useEffect, useRef, useState} from "react";
import {AppwriteException} from "appwrite";
import NaviBar from "@/app/navigation";
export default function Home() {
    return (
        <div className="flex bg-gradient-to-br from-blue-800 to-green-800 h-screen  justify-center  ">
        <NaviBar/>
        <main
            className={"text-white bg-neutral-400/20 h-fit rounded-3xl p-10 mt-25 w-95/100"}>
            Hello
        </main>
        </div>
    );
}
