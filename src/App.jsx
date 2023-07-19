import About from './components/about/about';
import Header from './components/header';
import Home from './components/home/home';
import Services from './components/services/services';

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
