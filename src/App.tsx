import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';
import {Contactus} from "./pages/contactus.tsx";
import {Movieratings} from "@/pages/movieratings.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Cailloumovie} from "@/pages/cailloumovie.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    <Route>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/Movies" element={<Movies/>}/>
                        <Route path="/Contact-Us" element={<Contactus/>}/>
                        <Route path="/Movie-ratings" element={<Movieratings/>}/>
                        <Route path="/Caillou-the-movie" element={<Cailloumovie/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
