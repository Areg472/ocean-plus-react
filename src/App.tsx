import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.tsx';
import {Movies} from './pages/movies.tsx';
import {Layout} from "./Layout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Movies" element={<Movies/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
