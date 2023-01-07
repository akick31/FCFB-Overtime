import {Link, useNavigate} from "react-router-dom"
import mainLogo from "../../assets/images/ot_main.png";

const Logout = () => {
    if (sessionStorage.length > 0) {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div className="logout-success">
            <div className="logout-success-logo">
                <img src={mainLogo}/>
            </div>

            <h2>Success!</h2>
            <p>You successfully logged out!</p>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Logout;