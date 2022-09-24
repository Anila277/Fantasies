import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Register</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/signin">
                <div>Sign In</div>
            </Link>
        </nav>
    );
}

export default Header;