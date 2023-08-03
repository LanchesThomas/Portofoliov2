import { BsTelephone } from 'react-icons/bs';
import Blob from './blob';
const Hello = () => {
        return (
                <section
                        className="pt-40 pb-20 text-text flex flex-col gap-4 translate-y-[-100%] animate-apparitionTop"
                        id="home"
                >
                        <h1 className="text-5xl z-10">
                                Bonjour, <br /> je suis{' '}
                                <span className="text-secondary text-5xl sm:text-7xl font-bold">
                                        développeur web
                                </span>
                                .
                        </h1>
                        <h2 className="text-text text-3xl w-full md:w-[75%] z-10">
                                J&apos;aime créer, améliorer et développer des
                                sites web en combinant ma passion pour la
                                conception esthétique avec mes compétences
                                techniques afin de donner vie à des expériences
                                en ligne uniques et innovantes.
                        </h2>
                        <a
                                href="#contact"
                                className="bg-secondary rounded-full md:w-1/2 lg:w-[30%] h-14 mt-10 flex justify-center items-center gap-3 hover:scale-105 duration-100 hover:cursor-pointer"
                        >
                                <button className="text-2xl font-semibold tracking-wide">
                                        Prendre contact{' '}
                                </button>
                                <BsTelephone size={25} className="" />
                        </a>
                        <Blob />
                </section>
        );
};

export default Hello;
