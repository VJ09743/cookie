
import "./clientPage.js"
import ClientCookie from './clientPage';
import fet from "@/app/fetch";
export default async function CookiePage() {
    let imgSrc = await fet(21)
    return (
        <ClientCookie imgSrc={imgSrc}/>
    )
}
export const metadata = {
    title: "Jorithm Cookie Clicker",
    description: "A personal project"
};
