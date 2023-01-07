import Cookies from 'universal-cookie';

function SessionAuth() {
    var cookie = new Cookies();
    const idString = cookie.get('session_id');
    if (idString === "undefined" || idString == null)
    {
        return null;
    }
    
    return idString;
}

export default SessionAuth;