import { ProjectsData } from '../../data/projects';
import ProjectCard from './projectCard';

const Projects = () => {
        return (
                <section className="text-text py-20">
                        <h3 className="text-2xl">Réalisations</h3>
                        <div className="flex flex-col gap-10">
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
