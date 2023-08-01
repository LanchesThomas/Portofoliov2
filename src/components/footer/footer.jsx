import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { LiaCopyrightSolid } from 'react-icons/lia';
import { BsLinkedin } from 'react-icons/bs';
import { useEffect, useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../../App';

const Footer = () => {
        const [theme] = useContext(ThemeContext);
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        return (
                <div data-aos="fade-in">
                        <footer
                                className="bg-darker h-50 p-5 flex flex-col justify-around items-center px-[10%]"
                                
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
                                <div
                                        className={
                                                theme === 'dark'
                                                        ? 'h-1 w-full bg-tertiary my-4 text-center'
                                                        : 'h-1 w-full bg-[white] my-4 text-center'
                                        }
                                ></div>
                                <div className="flex gap-10  text-4xl text-secondary">
                                        <BsLinkedin />
                                        <BsGithub />
                                </div>
                        </footer>
                </div>
        );
};

export default Footer;
