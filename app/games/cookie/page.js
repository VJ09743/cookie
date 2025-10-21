"use server"
import ClientCookie from "@/app/games/cookie/clientPage";
import fet from "@/app/fetch";
import NaviBar from "@/app/navigation";

export default async function CookiePage() {
    let imgSrc = await fet(21)
    return (
        <div
            className="flex p-0 w-screen h-screen justify-center items-center relative">
        <NaviBar/>
        <ClientCookie imgSrc={imgSrc}>  </ClientCookie>
        </div>
    )
}
