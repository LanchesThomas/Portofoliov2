const SkillCard = ({ title, logo, description }) => {
        return (
                <div className="h-100 w-full bg-tertiary flex flex-col gap-4 p-8 skillCard hover:bg-secondary hover:scale-110 transition-all group">
                        <div className='text-5xl text-secondary group-hover:text-main'>{logo}</div>
                        <h3 className='font-bold text-xl tracking-wide group-hover:text-main'>{title}</h3>
                        <p className=" group-hover:text-main">{description}</p>
                </div>
        );
};

export default SkillCard;
