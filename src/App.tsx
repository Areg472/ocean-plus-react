import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';
import {Layout} from "./Layout.tsx";
import {Contactus} from "./pages/contactus.tsx";
import HelmetWrapper from './components/HelmetWrapper';

function App() {
    return (
        <HelmetWrapper>
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Movies" element={<Movies/>}/>
                    <Route path="/Contact-Us" element={<Contactus/>}/>
                </Route>
            </Routes>
        </Router>
        </HelmetWrapper>
    )
}

export default App
