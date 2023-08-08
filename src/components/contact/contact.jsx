import 'aos/dist/aos.css';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
        return (
                <div id="#contact" className="text-text py-20">
                        <h3 className="text-2xl">Contact</h3>
                        <div className="h-1 bg-tertiary my-4"></div>
                        <h2 className="text-5xl text-secondary font-bold tracking-wide mb-10">
                                Contactez moi
                        </h2>
                        <div className="grid gap-5 sm:flex sm:justify-center ">
                                <a
                                        href="mailto:lanches.thomas@gmail.com"
                                        className="sm:w-2/3 flex justify-center items-center text-5xl lg:text-8xl text-text gap-4 p-5 hover:bg-secondary hover:scale-105 transition-all group bg-tertiary"
                                >
                                        <BiLogoGmail className="group-hover:text-main" />
                                </a>
                                <a
                                        href="https://www.linkedin.com/in/thomas-lanches/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="sm:w-2/3 flex justify-center items-center text-5xl lg:text-8xl text-text gap-4 p-5 hover:bg-secondary hover:scale-105 transition-all group bg-tertiary"
                                >
                                        <FaLinkedinIn className="group-hover:text-main" />
                                </a>
                                <div className="sm:w-2/3 flex justify-center items-center text-5xl lg:text-7xl text-text gap-4 p-5 hover:bg-secondary hover:scale-105 transition-all group bg-tertiary">
                                        <BsFillTelephoneFill className="group-hover:hidden group-hover:text-main" />
                                        <div className="p-5 hidden group-hover:inline text-main text-xl xl:text-3xl transition-all">
                                                <p>06.43.87.50.34</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;
