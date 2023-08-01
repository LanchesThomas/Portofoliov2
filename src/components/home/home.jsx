
import Services from '../services/services';
import About from '../about/about';
import Hello from './hello';
import Contact from '../contact/contact';

const home = () => {
        return (
                <>
                        <Hello />
                        <Services/>
                        <About/>
                        <Contact/>
                </>
        );
};

export default home;
