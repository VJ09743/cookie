"use server"
import NaviBar from "@/app/navigation";
import fet from "./fetch.js";



export default async function Home() {
    const rep = await fet(1); // ✅ Await the data

    return (

        <div className="flex h-screen  justify-center">

            <NaviBar />
            <main className="text-white bg-neutral-400/20 h-fit rounded-3xl p-10 mt-25 w-95/100 overflow-auto">
                {rep}
            </main>
        </div>
    );
}
