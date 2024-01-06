import { useEffect } from 'react';
import { ProjectsData } from '../../data/projects';
import ProjectCard from './projectCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        return (
                <>
                        <Helmet>
                                <title>Thomas Lanches | Projets</title>
                                <meta name="description" content="Découvrez les projets sur lesquelles j'ai travaillé en tant que développeur web." />
                                <link rel="canonical" href="/portfolio" />
                        </Helmet>
                        <section
                                className="text-text py-40"
                                id="portofolio"
                                data-aos="fade-up"
                        >
                                <h3 className="text-2xl">Réalisations</h3>
                                <div className="h-1 bg-tertiary my-4"></div>
                                <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-20">
                                        {ProjectsData.map((project) => (
                                                <ProjectCard
                                                        key={project.id}
                                                        title={project.title}
                                                        image={project.image}
                                                        url={project.url}
                                                        description={
                                                                project.description
                                                        }
                                                        stacks={project.stacks}
                                                        data-aos="fadeup"
                                                />
                                        ))}
                                </div>
                        </section>
                </>
        );
};

export default Projects;
