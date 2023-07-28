import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ id, title, image, description, stacks }) => {
        useEffect(() => {
                Aos.init({diration: 2000})
        }, [])
        return (
                <div className="flex flex-col gap-6 h-full projectCards">
                        <p className="text-5xl font-bold text-secondary">
                                {title}
                        </p>
                        <div className="bg-tertiary p-6 h-full flex flex-col gap-2 justify-between">
                                <p>{description}</p>
                                <p className="py-10 text-2xl text-center">
                                        Stacks utilisés
                                </p>
                                <div className="flex justify-around">
                                        {stacks.map((stack, index) => (
                                                <div
                                                        key={index}
                                                        className="flex flex-col"
                                                >
                                                        <span className=" text-2xl lg:text-4xl border-2 p-2 text-secondary rounded-full">
                                                                {stack.logo}
                                                        </span>
                                                        <p className="text-xs text-center text-secondary">
                                                                {stack.name}
                                                        </p>
                                                </div>
                                        ))}
                                </div>
                                <div className="h-64 bg-cover my-6 overflow-hidden ">
                                        <img
                                                src={image}
                                                alt=""
                                                className="object-cover"
                                                
                                        />
                                </div>
                        </div>
                </div>
        );
};

export default ProjectCard;
