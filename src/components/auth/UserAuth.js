function UserAuth() {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString == "undefined")
    {
        return null;
    }

    const usernameString = sessionStorage.getItem('username');
    if (usernameString == null)
    {
        return null;
    }

    const userMap = new Map();
    userMap.set("token", tokenString);
    userMap.set("username", usernameString);
    return userMap;
}

export default UserAuth;