import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import CreateArticle from './components/pages/CreateArticle';
import ArticleDetails from './components/articles/ArticleDetails';
import NotFound from './components/pages/NotFound';
import Register from "./components/pages/Register";
import FCS from "./components/pages/FCS";
import FBS from "./components/pages/FBS";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/fbs" element={<FBS/>} />
                        <Route path="/fcs" element={<FCS/>} />
                        <Route path="/create-article" element={<CreateArticle/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/articles/:category/:id" element={<ArticleDetails/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </div>
                <footer className="footer">
                    <p className="text-footer">
                        Copyright ©-All rights are reserved
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;