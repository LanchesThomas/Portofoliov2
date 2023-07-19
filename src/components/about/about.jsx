import CV from '../../assets/CV/CV.pdf';

const About = () => {
        return (
                <section id="about" className="text-text py-20">
                        <h3 className="text-2xl">A propos</h3>
                        <h2 className="text-5xl text-secondary font-bold tracking-wide">
                                Parcours
                        </h2>
                        <p className="text-lg my-10">
                                Passionné par la technologie et
                                l&apos;informatique depuis toujours, je me suis
                                récemment reconverti en tant que développeur web
                                il y a un an. &nbsp;J&apos;ai été immédiatement
                                captivé par la création de sites web et
                                j&apos;ai consacré chaque moment libre à
                                approfondir mes connaissances en langages de
                                programmation. &nbsp;J&apos;ai commencé par le{' '}
                                <span className="text-secondary font-bold">
                                        HTML
                                </span>
                                , &nbsp;
                                <span className="text-secondary font-bold">
                                        CSS
                                </span>{' '}
                                et&nbsp;{' '}
                                <span className="text-secondary font-bold">
                                        JavaScript
                                </span>
                                , &nbsp;puis ma curiosité m&apos;a permis
                                d&apos;approfondir mes compétences en apprenant
                                <span className="text-secondary font-bold">
                                        &nbsp;React
                                </span>
                                ,
                                <span className="text-secondary font-bold">
                                        &nbsp;Tailwind
                                </span>
                                ,
                                <span className="text-secondary font-bold">
                                        &nbsp;PHP
                                </span>,
                                <span className="text-secondary font-bold">
                                         &nbsp;MySQL
                                </span>
                                ... <br />
                                <br />
                                Ma passion m&apos;a poussé à réalisé des projets
                                et à suivre des formations en ligne pour me
                                perfectionner. &nbsp;Aujourd&apos;hui, je suis ravi d&apos;utiliser
                                mes compétences et ma passion pour contribuer à
                                la création de sites web innovants et
                                engageants.
                        </p>
                        <a href={CV} target="_blank" rel="noopener noreferrer" className='border-b-2 border-secondary font-bold text-2xl hover:text-3xl transition-all' >
                                Télécharger mon CV
                        </a>
                </section>
        );
};

export default About;
