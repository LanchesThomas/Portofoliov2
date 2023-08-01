import { FaReact as React } from 'react-icons/fa';
import { SiStyledcomponents as StyledComponents } from 'react-icons/si';
import { SiExpress as Express } from 'react-icons/si';
import { SiMongoose as Mongoose } from 'react-icons/si';
import { SiMongodb as MongoDb } from 'react-icons/si';
import { DiCss3 as CSS } from 'react-icons/di';
import { AiFillHtml5 as HTML } from 'react-icons/ai';
import { SiJavascript as JavaScript } from 'react-icons/si';
import { SiMui as MUI } from 'react-icons/si';

export const ProjectsData = [
        {
                id: 1,
                title: 'Kasa',
                image: '/img/kasa.webp',
                url: "https://lanchesthomas.github.io/kasa",
                description:
                        "Ce projet consiste en une refonte complète du site de Kasa, réalisé il y a plus de 10 ans en ASP.NET avec un important code legacy. L'objectif est de migrer vers une stack JavaScript complète avec NodeJS côté back-end et React côté front-end. J'étais chargé de démarrer le projet React et de développer l'ensemble de l'application en suivant les maquettes, en créant les composants React et les routes React Router. J'avais également des contraintes fonctionnelles à respecter, notamment pour le défilement des photos dans la galerie et le comportement des Collapses. Ma mission consistais donc à développer le front-end avec un code de qualité en accord avec les coding guidelines de Kasa.",
                stacks: [
                        {
                                name: 'react',
                                logo: <React />,
                        },
                        {
                                name: 'Styled Components',
                                logo: <StyledComponents/>,
                        },
                ],
        },
        {
                id: 2,
                title: 'Gpt-3',
                image: '/img/gpt-3.webp',
                url:"https://lanchesthomas.github.io/gpt-3/",
                description: "Ce projet consiste en une refonte complète du site de Kasa, réalisé il y a plus de 10 ans en ASP.NET avec un important code legacy. L'objectif est de migrer vers une stack JavaScript complète avec NodeJS côté back-end et React côté front-end. J'étais chargé de démarrer le projet React et de développer l'ensemble de l'application en suivant les maquettes, en créant les composants React et les routes React Router. J'avais également des contraintes fonctionnelles à respecter, notamment pour le défilement des photos dans la galerie et le comportement des Collapses. Ma mission consistais donc à développer le front-end avec un code de qualité en accord avec les coding guidelines de Kasa.",
                stacks: [
                    {
                            name: 'React',
                            logo: <React />,
                    },
                    {
                            name: 'Styled Components',
                            logo: <StyledComponents />,
                    },
                    {
                            name: 'MUI',
                            logo: <MUI />,
                    },
            ],
        },
        {
                id: 3,
                title: 'Piiquantes',
                image: '/img/piiquantes.webp',
                description:
                        "Cette fois ci dans la peau d'un développeur back-end indépendant, j'ai travaillé sur l'API d'une application web de critique de sauces piquantes pour la marque \"Piiquante\". Ils souhaitaient une galerie de sauces où les utilisateurs peuvent partager et évaluer les sauces. Le front-end été déjà développé en Angular. La sécurité été primordiale suite à des attaques précédentes, c'est pourquoi on a mis en place une protection des mots de passe élevée.",
                stacks: [
                        {
                                name: 'Express',
                                logo: <Express />,
                        },
                        {
                                name: 'Mongoose',
                                logo: <Mongoose />,
                        },
                        {
                                name: 'MongoDb',
                                logo: <MongoDb />,
                        },
                ],
        },
        {
                id: 4,
                title: 'Kanap',
                image: "/img/kanap.webp",
                description: "Dans ce projet on m'a confié une mission pour le client Kanap, une marque de canapés. Ils souhaitaient une plateforme de e-commerce en plus de leur boutique physique pour vendre leurs produits en ligne.   L'implémentation des informations du site c'est faite de manière dynamique en intégrant les éléments de l'API avec JavaScript. J'ai suivi les maquettes statique et dynamiques afin de les intégrer dans le site.",
                stacks: [
                        {
                                name: 'CSS',
                                logo: <CSS />,
                        },
                        {
                                name: 'HTML',
                                logo: <HTML />,
                        },
                        {
                                name: 'JavaScript',
                                logo: <JavaScript />,
                        },
                ],
        },
];
