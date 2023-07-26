import { ProjectsData } from '../../data/projects';
import ProjectCard from './projectCard';

const Projects = () => {
        return (
                <section className="text-text py-40" id='portofolio'>
                        <h3 className="text-2xl">Réalisations</h3>
                        <div className='h-1 bg-tertiary my-4'></div>
                        <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-20">
                                {ProjectsData.map((project) => (
                                        <ProjectCard
                                                key={project.id}
                                                title={project.title}
                                                image={project.image}
                                                description={
                                                        project.description
                                                }
                                                stacks={project.stacks}
                                        />
                                ))}
                        </div>
                </section>
        );
};

export default Projects;
