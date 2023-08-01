import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../App';
import { MdLightMode as Light } from 'react-icons/md';
import { MdDarkMode as Dark } from 'react-icons/md';

const SwitchTheme = () => {
        const [theme, setTheme] = useContext(ThemeContext);

        const handleSwithchTheme = () => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
        };
        useEffect(() => {
                if (theme === 'dark') {
                        document.documentElement.dataset.theme = 'dark';
                } else {
                        document.documentElement.dataset.theme = 'light';
                }
        }, [theme]);

        return (
                <div className="absolute top-[54%] right-[0%] md:right-[2%] translate-x-[-50%] translate-y-[-50%]">
                        <button onClick={handleSwithchTheme} aria-label='switch-button'>
                                {theme === 'dark' ? (
                                        <Dark className="text-2xl text-secondary animate-spin-switch" />
                                ) : (
                                        <Light className="text-2xl text-secondary animate-spin-switch" />
                                )}
                        </button>
                </div>
        );
};

export default SwitchTheme;
