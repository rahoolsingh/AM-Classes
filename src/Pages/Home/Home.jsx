import HighlightAlert from "../../components/Alerts/HighlightAlert/HighlightAlert.jsx";
import CarouselHero from "../../components/Carousel/CarouselHero.jsx";
import MetroMenu from "../../components/MetroMenu/MetroMenu.jsx";
import NoticeBoard from "../../components/NoticeBoard/NoticeBoard.jsx";
import { metroMenuItems } from "./MetroMenu.js";

function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className="sm:col-span-4">
                <HighlightAlert link={"/admission"} />
            </div>
            <div className="sm:col-span-2">
                <CarouselHero />
            </div>
            <div className="sm:col-span-2">
                <NoticeBoard />
            </div>
            <div className="sm:col-span-4">
                <MetroMenu metroMenuItems={metroMenuItems} />
            </div>
        </div>
    );
}

export default Home;
