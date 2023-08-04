
import Services from '../services/services';
import About from '../about/about';
import Hello from './hello';
import Contact from '../contact/contact';
import { Helmet } from 'react-helmet-async';

const home = () => {
        return (
                <>
                <Helmet>
                        <title>Thomas Lanches | Portofolio</title>
                        <meta name="description" content="Je suis Thomas Lanches, développeur web & mobile. Animé par l'envie de créer des sites innovants,  je met mes compétences à vos services." />
                        <link rel="canonical" href="/" />
                </Helmet>
                        <Hello />
                        <Services/>
                        <About/>
                        <Contact/>
                </>
        );
};

export default home;
