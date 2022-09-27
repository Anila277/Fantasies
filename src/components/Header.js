import { login, logout } from '../firebase'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/about">
                <div>About</div>
            </Link>
            <section>
                <div onClick={login}>Login</div>
                <div onClick={logout}>Logout</div>
            </section>

        </nav>

    );
}

export default Header;