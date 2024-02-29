import map from "./map.png";
import contactImage from "./contact.png";
import ContactInfo from "../../components/Forms/ContactInfo";

function Contact() {
    return (
        <div className="space-y-2">
            <div className="grid lg:grid-cols-3 gap-2">
                <div className="space-y-2 bg-white rounded-lg p-4 sm:p-8 lg:col-span-2 flex flex-col">
                    <h2 className="text-4xl font-bold text-center sm:text-left">
                        Get in touch
                    </h2>
                    <div className="flex justify-center items-center h-full w-full">
                        <span>
                            <ContactInfo />
                        </span>
                    </div>
                </div>
                <div className="space-y-2 bg-white rounded-lg p-4 sm:p-8 hidden lg:block">
                    <img src={contactImage} />
                </div>
            </div>
            <div className="grid gap-2">
                <div className="space-y-2 bg-white rounded-lg h-40 sm:h-96 overflow-hidden">
                    <a
                        href="https://maps.app.goo.gl/2bsrf97gA4nsSuwA6"
                        target="_blank"
                    >
                        <img
                            className="w-full h-full object-cover object-center"
                            src={map}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
