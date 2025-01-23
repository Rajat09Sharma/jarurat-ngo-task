import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { usersAction } from "../store/user-slice";


export default function MainNavigation() {


    const dispatch = useDispatch();
    function handleSearch(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        // console.log(data);
        dispatch(usersAction.searchUsers({ searchTerm: data.searchterm }));
    }
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-5" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                        </li>
                    </ul>
                    <form onSubmit={handleSearch} className="d-flex mx-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" name="searchterm" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
