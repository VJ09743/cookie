// just document the object structure in comments
// Tener = { id: number, cps: number, createdAt: number }

"use client";
import {useEffect, useRef, useState} from "react";
import {Client, ID, TablesDB} from "appwrite";
import {AppwriteException} from "appwrite";
import NaviBar from "@/app/navigation";
import Image from "next/image";
import {waitAtLeastOneReactRenderTask} from "next/dist/lib/scheduler";

export default function Home() {
    const [score, setScore] = useState(0);
    const [teners, setTeners] = useState([]);
    const [tenersprice, settenerprice] = useState(10);
    const tenerIdRef = useRef(0);
    const lastUpdateRef = useRef(Date.now());
    const [buttonOffset, setButtonOffset] = useState({top: 0, left: 0});
    const mainRef = useRef(null);
    useEffect(() => {
        setButtonOffset({top: window.innerHeight/2 -150, left: window.innerWidth/2 -50});
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const delta = (now - lastUpdateRef.current) / 1000;
            lastUpdateRef.current = now;

            setScore(prev => prev + teners.reduce((sum, t) => sum + t.cps, 0) * delta);
        }, 100);

        return () => clearInterval(interval);
    }, [teners]);


    const buyTener = () => {
        if (score >= 10) {
            setScore(prev => prev - tenersprice);
            setTeners(prev => [...prev, {id: tenerIdRef.current++, cps: 0.4, createdAt: Date.now()},]);
            settenerprice(prev => prev + 10);
        }
    };
    const click = () => {
        setScore(prev => prev + 1);

        // Get the bounding box of the container
        const rect = mainRef.current?.getBoundingClientRect();
        if (!rect) return;

        const imgWidth = 100;
        const imgHeight = 100;

        // Compute random position *inside* the main container
        const newTop = Math.random() * (rect.height - imgHeight);
        const newLeft = Math.random() * (rect.width - imgWidth);

        // Update relative to parent container
        setButtonOffset({top: newTop, left: newLeft});
    };

    return (<div
        className="flex bg-gradient-to-br from-blue-800 to-green-800 p-4.5  w-screen h-screen justify-center items-center relative"
        ref={mainRef}>
        <NaviBar/>
        <Image
            src = {"https://api.jorithm.net/v1/storage/buckets/68e8ec10003cd417e364/files/cookieimg/view?project=68e6c97500379b85edde&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjhlOTFjODEzYTVhYjc5MzIyMjUiLCJyZXNvdXJjZUlkIjoiNjhlOGVjMTAwMDNjZDQxN2UzNjQ6Y29va2llaW1nIiwicmVzb3VyY2VUeXBlIjoiZmlsZXMiLCJyZXNvdXJjZUludGVybmFsSWQiOiI0MzM5NjozIiwiaWF0IjoxNzYwMTA3NjQ5fQ.PiM1xnOqZS5kz1Zje4IGRuTCX0TscP8fPE5qsTUtIp0"}
            //className="absolute outline-white/60 bg-neutral-400/20 border border-neutral-400/20 backdrop-blur-sm hover:bg-blue-950/20 text-3xl text-white px-8 py-3 rounded-full transition-colors duration-100"
            style={{
                top: `${buttonOffset.top}px`, left: `${buttonOffset.left}px`
            }}
            className={"absolute cursor-pointer"}
            onClick={() => click()}
            id="ook"
            alt=""
            width={100}
            height={100}>
        </Image>
        <main

            className="flex justify-center relative items-center gap-6 ">


            <button
                disabled={score < tenersprice}
                className={`text-3xl px-8 py-3 rounded-full transition-colors duration-100 outline-white/60
          ${score >= tenersprice ? "bg-neutral-400/20 hover:bg-blue-950/20 text-white " : (teners.length >= 1 ? "bg-neutral-400/60 text-white cursor-not-allowed" : "bg-gray-700 select-none text-gray-700 cursor-not-allowed")}`}
                onClick={buyTener}
            >
                Buy {tenersprice}
            </button>

            <div className="text-3xl text-center">
                <p>Score: {Math.floor(score)}</p>
                <p>Teners: {teners.length}</p>
                <p>CPS: {Math.round((teners.reduce((sum, t) => sum + t.cps, 0)) * 10) / 10}</p>
            </div>
        </main>
    </div>);
}
