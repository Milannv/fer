import {UserListPage} from "../pages/user/UserList";
import {UserPage} from "../pages/user/User";
import {Unauthorised} from "../pages/other/Unauthorised";
import {ProtectedPage} from "../pages/protected-page/ProtectedPage";

export default [
    {
        "path": "/users",
        "resolve": UserListPage
    },
    {
        "path": "/user/:name/:id",
        "resolve": UserPage
    },
    {
        "path": "/secret-authorised",
        "resolve": ProtectedPage,
        "secured": true
    },
    {
        "path": "/secret",
        "resolve": "Secret", // contrived example: router loads Unauthorised here
        "secured": true
    },
    {
        "path": "/unauthorised",
        "resolve": Unauthorised
    }
]