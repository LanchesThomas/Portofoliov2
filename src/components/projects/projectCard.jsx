const ProjectCard = ({ id, title, image, description, stacks }) => {
        return (
                <div className="bg-tertiary p-6">
                        <p className="text-5xl font-bold">
                                {title}
                        </p>
                        <p>{description}</p>
                        <p className="py-10 text-2xl">Stacks utilisés :</p>
                        <div className="flex gap-5 justify-around">
                                {stacks.map((stack, index) => (
                                        <div key={index} className="flex flex-col">
                                                <span className="text-6xl border-2 p-2 text-secondary rounded-full">
                                                        {stack.logo}
                                                </span>
                                                <p className="text-xs text-center text-secondary">
                                                        {stack.name}
                                                </p>
                                        </div>
                                ))}
                        </div>
                </div>
        );
};

export default ProjectCard;
