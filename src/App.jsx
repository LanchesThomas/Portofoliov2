import About from './assets/components/about/about';
import Header from './assets/components/header';
import Home from './assets/components/home/home';
import Services from './assets/components/services/services';

function App() {
        return (
                <div>
                        <Header />
                        <main className="px-[10%] ">
                                <Home />
                                <Services />
                                <About />
                        </main>
                </div>
        );
}

export default App;
