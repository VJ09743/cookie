import NaviBar from "@/app/navigation";
import fet from "./fetch.js";
import MobileDetect from "mobile-detect";



export default async function Home() {
    const rep = await fet(1); // ✅ Await the data

    return (

        <div className="flex bg-gradient-to-br from-blue-800 to-green-800 h-screen  justify-center"   style={{

            marginTop: "calc(-1 * env(safe-area-inset-top))",
            marginBottom: "calc(-1 * env(safe-area-inset-bottom))",
        }}>

            <NaviBar />
            <main className="text-white bg-neutral-400/20 h-fit rounded-3xl p-10 mt-25 w-95/100 overflow-auto">
                {rep}
            </main>
        </div>
    );
}
