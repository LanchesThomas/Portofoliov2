
import Services from '../services/services';
import About from '../about/about';
import Hello from './hello';

const home = () => {
        return (
                <>
                        <Hello />
                        <Services/>
                        <About/>
                </>
        );
};

export default home;
