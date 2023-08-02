import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { LiaCopyrightSolid } from 'react-icons/lia';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        return (
                <div data-aos=" ">
                        <footer
                                className="bg-darker h-50 p-10 flex flex-col justify-around items-center px-[10%]"
                                
                        >
                                <div className="w-full flex flex-col items-center md:flex-row justify-around text-text text-lg gap-5">
                                        <div className="flex gap-2 items-center">
                                                <LiaCopyrightSolid />{' '}
                                                <a
                                                        href="#contact"
                                                        className="text-secondary font-bold"
                                                >
                                                        {' '}
                                                        Thomas Lanches
                                                </a>{' '}
                                                <p>| 2023</p>
                                        </div>
                                        <p className="flex items-center gap-5">
                                                Made with{' '}
                                                <span className="text-4xl animate-spin-slow text-secondary">
                                                        <FaReact />
                                                </span>
                                                &
                                                <span className="text-4xl text-secondary animate-waves">
                                                        <SiTailwindcss />
                                                </span>
                                        </p>
                                </div>
                                
                        </footer>
                </div>
        );
};

export default Footer;
