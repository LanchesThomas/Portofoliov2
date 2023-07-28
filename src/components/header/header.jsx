import { useEffect } from 'react';
import Logo from './logo';
import NavMenu from './navMenu';
import SwitchTheme from './switchTheme';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
        useEffect(() => {
                Aos.init({ duration: 500 });
        },[]);

        return (
                <>
                        <header
                                className="fixed w-full bg-darker h-20 flex justify-between content-center px-[10%] z-50"
                                data-aos="fade-in"
                        >
                                <Logo />
                                <NavMenu />
                                <SwitchTheme />
                        </header>
                </>
        );
};

export default Header;
