
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/">
                <div>Register</div>
            </Link>
            <Link to="/signin">
                <div>Login</div>
            </Link>
            <Link to="/creators">
                <div>Creators</div>
            </Link>
        </nav>

    );
}

export default Header;