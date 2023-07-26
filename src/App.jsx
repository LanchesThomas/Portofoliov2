import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import { Route, Routes } from 'react-router-dom';

function App() {
        return (
                <div>
                        <Header />
                        <main className="px-[10%]">
                                <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route
                                                path="/portofolio"
                                                element={<Projects />}
                                        />
                                </Routes>
                        </main>
                        <Footer />
                </div>
        );
}

export default App;
