import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiLogoGmail as Gmail } from 'react-icons/bi';
import { FaLinkedinIn as LinkedIn } from 'react-icons/fa';
import { NavContext } from '../../App';

const SideBar = () => {
        const [nav, setNav] = useContext(NavContext);
        const SidebarRef = useRef();

        useEffect(() => {
                const closeNav = (e) => {
                        if (e.target !== SidebarRef && e.target.id !== 'open') {
                                setNav(true);
                        }
                };
                document.body.addEventListener('click', closeNav);
                return () =>
                        document.body.removeEventListener('click', closeNav);
        }, [setNav]);

        const handleNav = () => {
                setNav(!nav);
        };

        return (
                <div className="md:hidden" onClick={handleNav}>
                        {nav ? (
                                <AiOutlineMenu
                                        className="text-text text-xl"
                                        onClick={handleNav}
                                        id="open"
                                />
                        ) : (
                                <div ref={SidebarRef}>
                                        <AiOutlineCloseCircle
                                                className="text-text text-xl"
                                                onClick={handleNav}
                                        />
                                        <div
                                                className="absolute h-screen w-60 bg-darker p-5 top-20 right-0 flex flex-col justify-around animate-sideBar"
                                                id="sidebar"
                                        >
                                                <nav className="text-text flex flex-col justify-start gap-10 transition-all mt-[-100px]">
                                                        <a
                                                                href="/#home"
                                                                className="h-12 p-5 flex justify-center items-center border-b-2 border-secondary "
                                                        >
                                                                ACCUEIL
                                                        </a>
                                                        <a
                                                                href="/#services"
                                                                className="h-12 p-5 flex justify-center items-center border-b-2 border-secondary "
                                                        >
                                                                SERVICES
                                                        </a>
                                                        <a
                                                                href="/#about"
                                                                className="h-12 p-5 flex justify-center items-center border-b-2 border-secondary "
                                                        >
                                                                A PROPOS
                                                        </a>
                                                        <Link
                                                                to="/portfolio"
                                                                className="h-12 p-5 flex justify-center items-center border-b-2 border-secondary "
                                                        >
                                                                REALISATIONS
                                                        </Link>
                                                        <a
                                                                href="/#contact"
                                                                className="h-12 p-5 flex justify-center items-center border-b-2 border-secondary "
                                                        >
                                                                CONTACT
                                                        </a>
                                                </nav>
                                                <div className="h-32 grid grid-cols-2  gap-3 justify-center items-center mt-[-150px]">
                                                        <a
                                                                href="mailto:lanches.thomas@gmail.com"
                                                                className="flex justify-center rounded-full text-3xl p-2 bg-secondary text-main"
                                                        >
                                                                <Gmail />
                                                        </a>
                                                        <a
                                                                href="https://www.linkedin.com/in/thomas-lanches/"
                                                                className="flex justify-center text-3xl rounded-full p-2 bg-secondary text-main"
                                                        >
                                                                <LinkedIn />
                                                        </a>
                                                        <p className="text-xl text-secondary  text-center col-span-2 ">
                                                                06.43.87.50.34
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        )}
                </div>
        );
};

export default SideBar;
