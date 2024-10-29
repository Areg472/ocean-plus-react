import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';
import {Contactus} from "./pages/contactus.tsx";
import {Movieratings} from "@/pages/movieratings.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Cailloumovie} from "@/pages/cailloumovie.tsx";
import {Cftwcftl123} from "@/pages/cftwcftl123.tsx";
import {Cftwcftl4} from "@/pages/cftwcftl4.tsx";
import {Cftwcftl5} from "@/pages/cftwcftl5.tsx";
import {Gabricks} from "@/pages/gabricks.tsx";
import {Goofus1} from "@/pages/goofus1.tsx";
import {Privacy} from "@/pages/privacypolicy.tsx";

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
                        <Route path="/Privacy-policy" element={<Privacy/>}/>
                        <Route path="/Caillou-the-movie" element={<Cailloumovie/>}/>
                        <Route path="/Cftwcftl-the-movie-123" element={<Cftwcftl123/>}/>
                        <Route path="/Cftwcftl-the-movie-4" element={<Cftwcftl4/>}/>
                        <Route path="/Cftwcftl-the-movie-5" element={<Cftwcftl5/>}/>
                        <Route path="/Ga-bricks-the-movie" element={<Gabricks/>}/>
                        <Route path="/Goofus-and-Doofus-1" element={<Goofus1/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
