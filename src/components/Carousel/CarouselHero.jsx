import { Carousel } from "flowbite-react";
import image1 from "../../assets/heroImages/hero_0.png";
import image2 from "../../assets/heroImages/hero_1.png";
import image3 from "../../assets/heroImages/hero_2.png";
import image4 from "../../assets/heroImages/hero_3.png";

const images = [image1, image2, image3, image4];

function CarouselHero() {
    return (
        <div className="aspect-video rounded-lg overflow-hidden bg-white p-2 object-fill">
            <Carousel
            className="h-full"
            autoplay={true}
            autoplaySpeed={5000}
            indicators={false}
            infinite={true}
            >
                {images.map((image, index) => (
                    <img className="bg-red-500 h-full object-cover" src={image} alt={`Slide ${index + 1}`} />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselHero;
