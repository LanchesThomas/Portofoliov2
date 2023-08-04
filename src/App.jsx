import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import { Route, Routes } from 'react-router-dom';

export const ThemeContext = React.createContext();
export const NavContext = React.createContext();

function App() {
        const [nav, setNav] = useState(true);
        const [theme, setTheme] = useState('dark');        
        
        return (
                <ThemeContext.Provider value={[theme, setTheme]}>
                        <NavContext.Provider value={[nav, setNav]}>
                                <Header />

                                <main className="px-[10%]">
                                        <Routes>
                                                <Route
                                                        path="/"
                                                        element={<Home />}
                                                />
                                                <Route
                                                        path="/portfolio"
                                                        element={<Projects />}
                                                />
                                        </Routes>
                                </main>
                                <Footer />
                        </NavContext.Provider>
                </ThemeContext.Provider>
        );
}

export default App;
