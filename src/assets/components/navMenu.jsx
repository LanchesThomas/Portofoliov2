import SideBar from './sidebar';

const NavMenu = () => {
        return (
                <div className="relative flex items-center">
                        <nav className="hidden my-auto gap-5 lg:gap-10 text-text lg:text-xl font-bold tracking-wide md:flex ">
                                <a
                                        href="#home"
                                        className="hover:text-secondary"
                                >
                                        Home
                                </a>
                                <a
                                        href="#services"
                                        className="hover:text-secondary"
                                >
                                        {' '}
                                        Services
                                </a>
                                <a
                                        href="#about"
                                        className="hover:text-secondary"
                                >
                                        A propos
                                </a>
                                <a
                                        href="#portofolio"
                                        className="hover:text-secondary"
                                >
                                        Réalisations
                                </a>
                                <a
                                        href="#contact"
                                        className="hover:text-secondary"
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
