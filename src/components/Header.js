import { login, logout } from '../firebase'
import { Link } from "react-router-dom";

function Header({ user }) {
    return (
        <nav id='hover' className="nav">
            <Link to="/">
                <div>Fantasies</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/index">
                <div>Poem Index</div>
            </Link>
            <section>
                {
                    user ?
                        <>
                            <div>Welcome,
                                <Link to="/profile">
                                    {user.displayName}
                                </Link>
                            </div>
                            <div className='loginbtn' onClick={logout}>Logout</div>
                        </>
                        :
                        <div className='loginbtn' onClick={login}>Login</div>

                }
            </section>

        </nav>

    );
}

export default Header;