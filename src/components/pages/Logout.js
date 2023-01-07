import {Link} from "react-router-dom"
import mainLogo from "../../assets/images/ot_main.png";
import Cookies from "universal-cookie";
import {API_SERVER} from "../../config/config";
import {Component, useEffect} from "react";
import SessionAuth from "../auth/SessionAuth";

function Logout() {
    useEffect(() => {
        async function handleLogout() {
            var cookie = new Cookies();
            var sessionId = cookie.get("session_id")
            if (sessionId != null) {
                const response = await fetch(API_SERVER + "session/" + sessionId, {
                    method: 'DELETE'
                })

                cookie.remove("session_id");

                window.location.reload();
            }
        };

        handleLogout();
    });

    return (
        <div className="logout-success">
            <div className="logout-success-logo">
                <img src={mainLogo} alt={"Overtime Logo"}/>
            </div>

            <h2>Success!</h2>
            <p>You successfully logged out!</p>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Logout;