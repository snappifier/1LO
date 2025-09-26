import Banner from "./banner.jsx";
import Wstep from "./Wstep.jsx";
import {AktualnosciNew} from "./AktualnosciNew.jsx";
import Shields from "../../components/footer/shields.jsx"
import Kierunki from "./Kierunki.jsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {get} from "../../features/fetcher.jsx";

export default function Home(){
    const strona_glowna = useSuspenseQuery({
        queryKey: ["strona-glowna"],
        queryFn: () =>
            get("strona-glowna-szablon", {
                params: {
                    "populate[Kolejnosc][populate]": "*",

                },
            }),
    });
    const kolejnosc = strona_glowna?.data?.data
    console.log(kolejnosc)
    const options = (data) => {
        const table = {
            "home.krotko-o-szkole" : <Wstep data={data} />,
            "home.profile" : <Kierunki data={data} />,
            "home.aktualnosci" : <AktualnosciNew />,
            "home.osiagniecia" : <Shields />
        }
        return table[data["__component"]]
    }

    return (
        <div className="relative w-full min-h-screen">
            <div className="w-full h-max flex flex-col gap-10 items-center z-10">
                <div className="w-full bg-transparent">
                    <Banner />
                </div>
                {kolejnosc["Kolejnosc"].map((data, index) => {
                    return (<div className="w-full bg-transparent">{options(data)}</div>)
                })}
            </div>
        </div>
    );
}