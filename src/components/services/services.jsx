import { SkillsData } from '../../data/skill';
import { StacksData } from '../../data/stack';
import SkillCard from './skill';
import StackCard from './stack';

const Services = () => {
        return (
                <section
                        className="text-text py-20 flex flex-col gap-4"
                        id="services"
                >
                        <h3 className="text-2xl">Services</h3>
                        <h2 className="text-5xl text-secondary font-bold tracking-wide">
                                Compétences
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                                {SkillsData.map((skill) => (
                                        <SkillCard
                                                key={skill.id}
                                                title={skill.title}
                                                logo={skill.logo}
                                                description={skill.description}
                                        />
                                ))}
                        </div>
                        <h2 className="text-5xl text-secondary font-bold tracking-wide pt-10">
                                Stack Techniques
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-main w-full gap-8 pt-5">
                                {StacksData.map((stack) => (
                                        <StackCard
                                                key={stack.id}
                                                logo={stack.logo}
                                                title={stack.title}
                                        />
                                ))}
                        </div>
                </section>
        );
};

export default Services;