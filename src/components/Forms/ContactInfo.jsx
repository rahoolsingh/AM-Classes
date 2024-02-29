import {
    IoCallOutline,
    IoMailOpenOutline,
    IoLocationOutline,
    IoLogoWhatsapp,
} from "react-icons/io5";

const contactItems = [
    {
        icon: IoCallOutline,
        color: "blue-700",
        label: "Phone",
        value: "+91 799 228 3975",
        link: "tel:+917992283975",
    },
    {
        icon: IoLogoWhatsapp,
        color: "green-600",
        label: "WhatsApp",
        value: "+91 799 228 3975",
        link: "https://wa.me/+917992283975",
    },
    {
        icon: IoMailOpenOutline,
        color: "red-700",
        label: "Email",
        value: "amclasseskathara2016@gmail.com",
        link: "mailto:amclasseskathara2016@gmail.com",
    },
    {
        icon: IoLocationOutline,
        color: "yellow-400",
        label: "Address",
        value: "AM Classes, Gayatri Colony, Rajendra Nagar, Kathara, Bokaro, Jharkhand (829116)",
        custom: "sm:col-span-3",
    },
];

function ContactInfo() {
    return (
        <div className="text-lg font-semibold">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-y-8">
                    {contactItems.map((item, index) => (
                        <a href={item.link}
                            key={index}
                            className={`flex flex-col justify-center items-center p-4 sm:gap-2 rounded-lg hover:bg-opacity-10 hover:bg-blue-400 select-none cursor-pointer ${item.custom}`}
                        >
                            <span
                                className={`text-3xl sm:text-5xl text-${item.color}`}
                            >
                                <item.icon />
                            </span>
                            <span className="text-center">{item.value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
