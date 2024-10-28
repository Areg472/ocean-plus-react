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
                        <Route path="/Cftwcftl-the-movie-123" element={<Cftwcftl123/>}/>
                        <Route path="/Cftwcftl-the-movie-4" element={<Cftwcftl4/>}/>
                        <Route path="/Cftwcftl-the-movie-5" element={<Cftwcftl5/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
