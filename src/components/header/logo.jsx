import { useState } from 'react';

const Logo = () => {
        const [click, setClick] = useState(false);
        const HandleClick = () => {
                setClick(!click);
                console.log(click);
        };
        return (
                <div className="my-auto flex">
                        <div
                                className={
                                        click
                                                ? 'border-2 border-secondary p-1   font-bold lg:text-xl tracking-wide cursor-pointer text-secondary bg-darker transition duration-300'
                                                : 'border-2 border-secondary p-1  font-bold lg:text-xl tracking-wide cursor-pointer text-main bg-secondary transition duration-300'
                                }
                                onClick={HandleClick}
                        >
                                THOMAS
                        </div>
                        <div
                                className={
                                        click
                                                ? 'border-2 border-secondary p-1  font-bold lg:text-xl tracking-wide cursor-pointer text-main bg-secondary transition duration-300'
                                                : 'border-2 border-secondary p-1  font-bold lg:text-xl tracking-wide cursor-pointer text-secondary bg-main transition duration-300'
                                }
                                onClick={HandleClick}
                        >
                                LANCHES
                        </div>
                </div>
        );
};

export default Logo;
//
