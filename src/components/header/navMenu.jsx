import SideBar from './sidebar';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavMenu = () => {
        const Location = useLocation();
        const LocationPath = Location.pathname;
        return (
                <div className="relative flex items-center">
                        {LocationPath === '/portofolio' ? (
                                <nav className="hidden my-auto gap-5 lg:gap-10 text-text lg:text-xl font-bold tracking-wide md:flex ">
                                        <a
                                                href="/#home"
                                                
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Home
                                        </a>

                                        <a
                                                href="/#services"
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                {' '}
                                                Services
                                        </a>
                                        <a
                                                href="/#about"
                                                className="hover:text-secondar y transition-colors duration-500"
                                        >
                                                A propos
                                        </a>
                                        <Link
                                                to="/portofolio"
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Réalisations
                                        </Link>
                                        <a
                                                href="/#contact"
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Contact
                                        </a>
                                </nav>
                        ) : (
                                <nav className="hidden my-auto gap-5 lg:gap-10 text-text lg:text-xl font-bold tracking-wide md:flex ">
                                        <ScrollLink
                                                to="home"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Home
                                        </ScrollLink>

                                        <ScrollLink
                                                to="services"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                {' '}
                                                Services
                                        </ScrollLink>
                                        <ScrollLink
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                A propos
                                        </ScrollLink>
                                        <Link
                                                to="/portofolio"
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Réalisations
                                        </Link>
                                        <ScrollLink
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                                className="hover:text-secondary transition-colors duration-500"
                                        >
                                                Contact
                                        </ScrollLink>
                                </nav>
                        )}

                        <div>
                                <SideBar />
                        </div>
                </div>
        );
};

export default NavMenu;
