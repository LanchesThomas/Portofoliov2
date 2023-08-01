import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        });
        return (
                <div id='contact' className="text-text py-20" data-aos="fade-up">
                        <h3 className="text-2xl">Contact</h3>
                        <div className="h-1 bg-tertiary my-4"></div>
                        <h2 className="text-5xl text-secondary font-bold tracking-wide mb-10">
                                Contactez moi
                        </h2>
                        <div className="flex gap-5">
                                <a
                                        href="mailto:lanches.thomas@gmail.com"
                                        className="h-100 w-full bg-tertiary flex justify-center items-center text-8xl text-secondary gap-4 p-8 skillCard hover:bg-secondary hover:scale-105 transition-all group"
                                >
                                        <BiLogoGmail className="group-hover:text-main" />
                                </a>
                                <a
                                        href="https://www.linkedin.com/in/thomas-lanches/"
                                        className="h-100 w-full bg-tertiary flex justify-center items-center text-8xl text-secondary gap-4 p-8 skillCard hover:bg-secondary hover:scale-105 transition-all group"
                                >
                                        <FaLinkedinIn className="group-hover:text-main" />
                                </a>
                                <div className="h-100 w-full bg-tertiary flex justify-center items-center text-7xl text-secondary gap-4 p-8 skillCard hover:bg-secondary hover:scale-105 transition-all group">
                                        <BsFillTelephoneFill className="group-hover:hidden group-hover:text-main" />
                                        <p className="hidden group-hover:inline text-main text-5xl">
                                                06.43.87.50.34
                                        </p>
                                </div>
                        </div>
                </div>
        );
};

export default Contact;
