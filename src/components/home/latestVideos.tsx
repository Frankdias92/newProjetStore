import { LazyYoutube } from "../store/lazyYoutube";
import { CategorySection } from "./categoryHome";


export function LatestVideos() {

    return (
        <section className="flex flex-col w-3/4 h-[350px] justify-around">
            <CategorySection categoryProps="Ultimos videos"/>
            <div className="flex flex-row gap-4">
                <LazyYoutube videoId="tD-0SAGcgvE?si=FRGyUd78xQLQPSma"/>
                <LazyYoutube videoId="d8-hmM8kD7U?si=QAp7eleH1E1OB1Zn"/>
                <LazyYoutube videoId="2ypIGmVrCBI?si=bO7bf3ueUMbU1Mnf"/>
            </div>
        </section>
    )
}