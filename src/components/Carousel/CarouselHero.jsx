import { Carousel } from "flowbite-react";
import image1 from "../../assets/heroImages/hero_0.png";
import image2 from "../../assets/heroImages/hero_1.png";
import image3 from "../../assets/heroImages/hero_2.png";
import image4 from "../../assets/heroImages/hero_3.png";

const images = [image1, image2, image3, image4];

function CarouselHero() {
    return (
        <div className="h-52 sm:h-96 rounded-lg overflow-hidden bg-white p-2">
            <Carousel>
                {images.map((image, index) => (
                    <img src={image} alt={`Slide ${index + 1}`} />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselHero;
