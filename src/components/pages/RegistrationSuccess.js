import { Link } from "react-router-dom"
import mainLogo from "../../assets/images/ot_main.png";

const RegisterSuccess = () => {
    return (
        <div className="register-success">
            <div className="register-success-logo">
                <img src={mainLogo}/>
            </div>

            <h2>Success!</h2>
            <p>You successfully registered for FCFB Overtime!</p>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default RegisterSuccess;