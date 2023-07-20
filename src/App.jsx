import About from './components/about/about';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Services from './components/services/services';

function App() {
        return (
                <div>
                        <Header />
                        <main className="px-[10%] ">
                                <Home />
                                <Services />
                                <About />
                                <Projects />
                        </main>
                </div>
        );
}

export default App;
