import { FaFacebook, FaInstagram } from "react-icons/fa";
import founderImage from "../../assets/founder.png";
import logo from "../../assets/logo.png";
import hero from "./hero.png";
import { FaXTwitter } from "react-icons/fa6";
function About() {
    return (
        <>
            <div className="mx-auto">
                <div className="flex flex-col space-y-2">
                    <div className="w-full sm:h-96 h-32 bg-white rounded-lg overflow-hidden">
                        <img
                            className="w-full object-cover h-full"
                            src={hero}
                            alt=""
                        />
                    </div>
                    <div className="text-justify text-base sm:text-xl grid md:grid-cols-2 lg:grid-cols-2  gap-2">
                        <div className="space-y-6 bg-white rounded-lg p-4 sm:p-8">
                            <p>
                                <span className="text-3xl sm:text-5xl font-medium">
                                    C
                                </span>
                                ommencing on{" "}
                                <b className="font-medium">4 April 2016</b>,{" "}
                                <b className="font-medium">
                                    AM Classes, Kathara
                                </b>{" "}
                                initiated its journey with a modest group of
                                students from{" "}
                                <b className="font-medium">Classes 8 to 10</b>.
                                Over eight years, the institution has made
                                significant strides,expanding vastly from its
                                unassuming beginnings tobecome one of the most
                                esteemed coaching classes in Kathara. This
                                accomplishment was made possible by the
                                supportive guidance of{" "}
                                <b className="font-medium">
                                    Mr. Ashish Kr. Verma
                                </b>
                                , who is both the founder and a member of the
                                faculty.
                            </p>
                            <p>
                                The institution provides a plethora of
                                opportunities for students to develop their
                                skills and talents in various domains. The
                                institute is renowned for its ceaseless
                                endeavours to excel in all fields, thus
                                maintaining a legacy of excellence.
                            </p>
                        </div>

                        <div className="space-y-2 bg-white rounded-lg p-4 sm:p-8">
                            <h2 className="text-4xl font-bold text-center sm:text-left pb-3">
                                Our Mission
                            </h2>
                            <p>
                                The mission of AM Classes, Kathara is to
                                prioritize innovation and the cultivation of
                                individual talents, critical thinking skills,
                                technological aptitude, ethical values,
                                accountability, and positive attitudes among our
                                students. We strive to create an environment
                                that fosters tolerance and enables our students
                                to make meaningful contributions to the global
                                community. Our institutional motto,{" "}
                                <b className="font-medium">
                                    &ldquo;Your Education Your Way&rdquo;
                                </b>
                                , attests to our commitment to serving society
                                in the field of education. Today, we stand as a
                                bastion of learning and a proponent of quality
                                education. Our goal is to nurture knowledge,
                                self-discovery, human dignity, and integrity
                                among our students.
                            </p>
                        </div>

                        <div className="space-y-2 bg-white rounded-lg p-4 sm:p-8 md:col-span-2 lg:col-span-2">
                            <h2 className="text-4xl font-bold text-center sm:text-left pb-3">
                                Our Objective
                            </h2>
                            <p>
                                Our overarching objective is to create a society
                                founded upon knowledge, underpinned by the
                                highest ethical standards, and geared towards
                                success. Our mission is to equip our students
                                with the skills and knowledge necessary to excel
                                in public examinations and competitions. We
                                achieve this by fostering self-development,
                                promoting creativity, upholding best practices,
                                adhering to fiscal prudence, and ensuring the
                                safety of life and property in our knowledge
                                bank.
                            </p>
                        </div>
                    </div>
                    <div className="text-justify text-base sm:text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="bg-blue-600 rounded-lg p-4 sm:p-8 text-white col-span-1 lg:col-span-3">
                            <h2 className="text-2xl sm:text-4xl font-bold sm:pb-3 pb-1">
                                Founder&apos;s Message
                            </h2>
                            <p className="font-normal">
                                &ldquo;Education is the most important part of a
                                person&apos;s life. An educated person never
                                stops after failure. He has the confidence and
                                courage to experiment and excel in life. He is
                                self-motivated as he has learned, and he is
                                never threatened by challenges. Education
                                enables you to start and create success stories.
                                It is not always academics that define
                                knowledge, but the development of your being
                                that holds equal importance. We, at AM Classes,
                                are here to guide and guard you through
                                it.&rdquo;
                            </p>
                            <div className="pt-4 flex justify-between items-center">
                                <div className="w-fit flex gap-2 items-center">
                                    <img
                                        src={founderImage}
                                        className="w-12 h-12 object-cover rounded-full border-2"
                                    />
                                    <span className="leading-tight text-base">
                                        <p className="font-semibold">
                                            Mr. Ashish Kr. Verma
                                        </p>
                                        <p className="text-sm font-medium">
                                            Founder
                                        </p>
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="https://www.facebook.com/Ashumahe"
                                        target="_blank"
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ashish_kumar_verma/"
                                        target="_blank"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://twitter.com/Ashish_mahe"
                                        target="_blank"
                                    >
                                        <FaXTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 sm:p-8 flex flex-col items-center justify-center space-y-2 col-span-1">
                            <div className="w-24 h-24 border-4 border-blue-700 rounded-full bg-zinc-100">
                                <img src={logo} className="w-full p-3" />
                            </div>
                            <h3 className="text-xl font-semibold uppercase">
                                Connect us on
                            </h3>
                            <div className="flex gap-2 text-xl justify-center items-center">
                                <a href="" target="_blank">
                                    <FaFacebook />
                                </a>
                                <a href="" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href="" target="_blank">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
