import SideBar from './sidebar';
import { Link } from 'react-router-dom';

const NavMenu = () => {
        return (
                <div className="relative flex items-center">
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
                                        className="hover:text-secondary transition-colors duration-500"
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

                        <div>
                                <SideBar />
                        </div>
                </div>
        );
};

export default NavMenu;
