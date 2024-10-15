import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';
import {Layout} from "./Layout.tsx";
import {Contactus} from "./pages/contactus.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Movies" element={<Movies/>}/>
                    <Route path="/Contact-Us" element={<Contactus/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
