import { Link } from 'react-router-dom';
import wordmark_logo from '../../images/ot_wordmark.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={wordmark_logo}/>
            </div>
            <div className="main-nav">
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fbs">FBS Articles</Link></li>
                    <li><Link to="/fcs">FCS Articles</Link></li>
                    <li><Link to="/create-article">Create Article</Link></li>
                </ul>
                <div className="rightNav">
                    <ul className="user-links">
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <input type="text" name="search" id="search"/>
                    <button className="btn btn-sm">Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;