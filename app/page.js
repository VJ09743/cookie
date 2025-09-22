// just document the object structure in comments
// Tener = { id: number, cps: number, createdAt: number }

"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [score, setScore] = useState(0);
    const [teners, setTeners] = useState([]);
    const [tenersprice, settenerprice] = useState(10);
    const tenerIdRef = useRef(0);
    const lastUpdateRef = useRef(Date.now());
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
            setTeners(prev => [
                ...prev,
                { id: tenerIdRef.current++, cps: 1, createdAt: Date.now() },
            ]);
            settenerprice(prev => prev + 10);
        }
    };

    return (
        <main className="flex justify-center items-center h-screen w-screen gap-6 bg-gradient-to-br from-blue-800 to-green-800">
            <button
                className="bg-neutral-400/20 border border-neutral-400/20  backdrop-blur-sm hover:bg-blue-950/20 text-3xl text-white px-8 py-3 rounded-full transition-colors duration-100"
                onClick={() => setScore(prev => prev + 1)}
            >
                Click
            </button>

            <button
                disabled={score < tenersprice}
                className={`text-3xl px-8 py-3 rounded-full transition-colors duration-100
          ${score >= tenersprice
                    ? "bg-neutral-400/20 hover:bg-blue-950/20 text-white "
                    : (teners.length >= 1?"bg-neutral-400/60 text-white cursor-not-allowed":"bg-gray-700 text-gray-700 cursor-not-allowed")
                }`}
                onClick={buyTener}
            >
                Buy {tenersprice}
            </button>

            <div className="text-3xl text-center">
                <p>Score: {Math.floor(score)}</p>
                <p>Teners: {teners.length}</p>
                <p>CPS: {teners.reduce((sum, t) => sum + t.cps, 0)}</p>
            </div>
        </main>
    );
}
