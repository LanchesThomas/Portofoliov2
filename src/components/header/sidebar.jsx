import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
        const [nav, setNav] = useState(true);
        const handleNav = () => {
                setNav(!nav);
                console.log(nav);
        };
        return (
                <div className="md:hidden" onClick={handleNav}>
                        {nav ? (
                                <AiOutlineMenu
                                        className="text-text text-xl"
                                        onClick={handleNav}
                                />
                        ) : (
                                <div className="relative bg-darker flex flex-col justify-around gap-6 ">
                                        <AiOutlineCloseCircle
                                                className="text-text text-xl"
                                                onClick={handleNav}
                                        />
                                        <nav className="absolute h-auto w-60 bg-darker p-5 top-12 right-[-10px] text-text flex flex-col gap-10 duration-500 rounded-bl-lg">
                                                <a href="/#home">Acceuil</a>
                                                <a href="/#services">Services</a>
                                                <a href="/#about">A propos</a>
                                                <Link to="/portofolio">
                                                        Réalisations
                                                </Link>
                                                <a href="/#contact">Contact</a>
                                        </nav>
                                </div>
                        )}
                </div>
        );
};

export default SideBar;
