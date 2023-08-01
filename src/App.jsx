import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import { Route, Routes } from 'react-router-dom';

export const ThemeContext = React.createContext()

function App() {
        const [theme, setTheme] = useState('dark');
        return (
                <ThemeContext.Provider value={[theme, setTheme]}>
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
                </ThemeContext.Provider>
        );
}

export default App;
