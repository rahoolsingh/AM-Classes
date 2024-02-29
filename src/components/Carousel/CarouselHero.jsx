import { Carousel } from "flowbite-react";

function CarouselHero() {
    return (
        <div className="h-52 sm:h-96 rounded-lg overflow-hidden bg-white p-2">
            <Carousel
                leftControl={<></>}
                rightControl={<></>}
                indicators={false}
            >
                {[...Array(5).keys()].map((i) => (
                    <img
                        key={i}
                        src={"https://raw.githubusercontent.com/rahoolsingh/AM-Classes/master/src/assets/heroImages/hero_" + i + ".png"}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselHero;
