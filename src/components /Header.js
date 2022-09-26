
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/register">
                <div>Register</div>
            </Link>
            <Link to="/signin">
                <div>Login</div>
            </Link>

        </nav>

    );
}

export default Header;