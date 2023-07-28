import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Logo = () => {
        const [theme] = useContext(ThemeContext);
        console.log(theme);
        return (
                <a href="/" className="my-auto flex ">
                        <div
                                className={
                                        theme === 'dark'
                                                ? 'border-2 border-secondary p-1 font-bold lg:text-xl tracking-wide text-secondary bg-main logo'
                                                : 'border-2 border-secondary p-1 font-bold lg:text-xl tracking-wide text-darker bg-secondary logo'
                                }
                        >
                                THOMAS
                        </div>
                        <div
                                className={
                                        theme === 'dark'
                                                ? 'border-2 border-secondary p-1 font-bold lg:text-xl tracking-wide text-main bg-secondary logo'
                                                : 'border-2 border-secondary p-1 font-bold lg:text-xl tracking-wide text-secondary bg-darker logo'
                                }
                        >
                                LANCHES
                        </div>
                </a>
        );
};

export default Logo;
//
