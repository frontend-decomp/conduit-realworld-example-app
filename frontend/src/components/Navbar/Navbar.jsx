import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Avatar";
import NavItem from "../NavItem";
import SourceCodeLink from "../SourceCodeLink";

function Navbar() {
  const { isAuth, loggedUser, status } = useAuth();
  const { username, image } = loggedUser || {};

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>

        <SourceCodeLink left />

        <ul className="nav navbar-nav pull-xs-right">
          <NavItem text="Home" icon="ion-compose" url="/" />

          {status === "unavailable" && (
            <li className="nav-item">
              <span className="nav-link">Connecting&hellip;</span>
            </li>
          )}

          {isAuth ? (
            <>
              <NavItem text="New Article" icon="ion-compose" url="/editor" />
              <NavItem text="Settings" icon="ion-gear-a" url="/settings" />
              <li className="nav-item">
                <Link
                  className="nav-link"
                  state={loggedUser}
                  to={`/profile/${username}`}
                >
                  <Avatar alt={username} className="user-pic" src={image} />
                  {" "}
                  {username}
                </Link>
              </li>
            </>
          ) : (
            <>
              <NavItem text="Login" icon="ion-log-in" url="/login" />
              <NavItem text="Sign up" url="/register" />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
