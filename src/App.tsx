import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/Movies" element={<Movies/>}/>
            </Routes>
        </Router>
    )
}

export default App
