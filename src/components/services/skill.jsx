const SkillCard = ({ title, logo, description }) => {
        return (
                <div className="h-100 w-full bg-tertiary flex flex-col gap-4 p-8">
                        <div className='text-5xl text-secondary'>{logo}</div>
                        <h3 className='font-bold text-xl tracking-wide'>{title}</h3>
                        <p>{description}</p>
                </div>
        );
};

export default SkillCard;
