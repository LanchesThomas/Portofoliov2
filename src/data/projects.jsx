import { FaReact as React } from 'react-icons/fa';
import { SiStyledcomponents as StyledComponents } from 'react-icons/si';
import { SiExpress as Express } from 'react-icons/si';
import { SiMongoose as Mongoose } from 'react-icons/si';
import { SiMongodb as MongoDb } from 'react-icons/si';
import { DiCss3 as CSS } from 'react-icons/di';
import { AiFillHtml5 as HTML } from 'react-icons/ai';
import { DiJavascript1 as JavaScript } from 'react-icons/di';
import { SiMui as MUI } from 'react-icons/si';
import { SiTailwindcss as Tailwind } from 'react-icons/si';
import { SiTailwindcss as Redux } from 'react-icons/si';
import { SiTailwindcss as OpenAI } from 'react-icons/si';

export const ProjectsData = [
        {
                id: 6,
                title: "Résumé d'articles avec GPT-4",
                image: '/img/ai-summarize.webp',
                url: 'https://lanchesthomas.github.io/ai-summarize/',
                description:
                        "Ce projet a été réalisé dans le but de travailler les appels API avec Redux en utilisant l'API d'OpenAI pour effectuer des requêtes. Toujours avec React et Tailwind qui me permettent de construire une application de A à Z en un minimum de temps. L'utilisation d'outils fonctionnant grâce à une intelligence artificielle était très enrichissante et m'a permis de voir les possibilités qu'ils offraient. Ce projet m'a été inspiré par Javascript Mastery et tous les crédits leur reviennent.",
                stacks: [
                        {
                                name: 'React',
                                logo: <React />,
                        },
                        {
                                name: 'Tailwind',
                                logo: <Tailwind />,
                        },
                        {
                                name: 'Redux',
                                logo: <Redux />,
                        },
                        {
                                name: 'OpenAI',
                                logo: <OpenAI />,
                        },
                ],
        },
        {
                id: 5,
                title: 'Portfolio',
                image: '/img/portfolio.webp',
                url: 'https://lanchesthomas.com',
                description:
                        "La création de ce portfolio m'a permis de comprendre la puissance de Tailwind associés avec React. J'ai pu apprendre comment fonctionnait Tailwind et sa customisation pour en faire un outil puissant et personnaliser. Ce portfolio présente mes compétences, projets et parcours professionnel, reflétant mon style personnel et ma passion pour le développement web. Je vous invite à explorer mon portfolio pour découvrir mon travail et me contacter pour toute collaboration ou question.",
                stacks: [
                        {
                                name: 'React',
                                logo: <React />,
                        },
                        {
                                name: 'Tailwind',
                                logo: <Tailwind />,
                        },
                        {
                                name: 'JavaScript',
                                logo: <JavaScript />,
                        },
                ],
        },
        {
                id: 4,
                title: 'Kasa',
                image: '/img/kasa.webp',
                url: 'https://lanchesthomas.github.io/kasa',
                description:
                        "Ce projet, réalisé lors de ma formation, consiste en une refonte complète du site de Kasa, réalisé il y a plus de 10 ans en ASP.NET. L'objectif était de migrer vers une stack JavaScript complète avec NodeJS côté back-end et React côté front-end. J'étais chargé de démarrer le projet React et de développer l'ensemble de l'application en suivant les maquettes, en créant les composants React et les routes React Router. J'avais également des contraintes fonctionnelles à respecter, notamment pour le défilement des photos dans la galerie et le comportement des Collapses. Ma mission consistait donc à développer le front-end avec un code de qualité en accord avec les coding guidelines de Kasa.",
                stacks: [
                        {
                                name: 'react',
                                logo: <React />,
                        },
                        {
                                name: 'Styled Components',
                                logo: <StyledComponents />,
                        },
                ],
        },
        {
                id: 3,
                title: 'Gpt-3',
                image: '/img/gpt-3.webp',
                url: 'https://lanchesthomas.github.io/gpt-3/',
                description:
                        "Ce projet a été réalisé avec pour seul but d'utiliser la librairie MUI. Il m'a permis de travailler mes connaissances de React avec Styled-Components pour le CSS. Le design moderne de ce projet m'a permis de travailler des fonctionnalités avancées en CSS, il m'a fallu être très exigeants quant aux placements de chaque élément et à leurs évolutions en fonction de la taille d'écran. Toutes les spécifications de CSS sont présentes sur ce site (Grid, FlexBox, Media Querries, etc).",
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
                id: 2,
                title: 'Piiquantes',
                image: '/img/piiquantes.webp',
                description:
                        "Ce projet a été réalisé dans le cadre de ma formation, j'ai travaillé sur l'API d'une application web de critique de sauces piquantes pour la marque \"Piiquante\". Ils souhaitaient une galerie de sauces où les utilisateurs pourraient partager et évaluer les sauces. Le front-end été déjà développé en Angular, ma mission été de développer le Back-end. La sécurité était primordiale suite à des attaques précédentes, c'est pourquoi on a mis en place une stratégie de protection des informations utilisateurs élevés.",
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
                id: 1,
                title: 'Kanap',
                image: '/img/kanap.webp',
                description:
                        "Toujours dans le cadre de ma formation, on m'a confié un projet pour une marque de canapé, Kanap. Ils souhaitaient une plateforme de e-commerce en plus de leur boutique physique pour vendre leurs produits en ligne. L'implémentation des informations du site s'est faite de manière dynamique en intégrant les éléments de l'API avec JavaScript. J'ai suivi les maquettes statiques et dynamiques afin de les intégrer dans leur site.",
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
