import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div>
                <div className="navbar shadow-md px-12 bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Phone Shop</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li> <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-green-500 mr-2" : ""
                                }
                            >
                                Home
                            </NavLink></li>
                            <li>
                                <NavLink
                                    to="/favorites"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-green-500 mr-2" : ""
                                    }
                                >
                                    Favorites
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-green-500 mr-2" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;