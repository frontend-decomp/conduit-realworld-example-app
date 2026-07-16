import { Link, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function FeedToggler() {
  const { isAuth } = useAuth();
  const { tag } = useParams();
  const [searchParams] = useSearchParams();

  const isFollowing = searchParams.get("feed") === "following";
  const isGlobal = !isFollowing && !tag;

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isAuth && (
          <li className="nav-item">
            <Link
              className={`nav-link ${isFollowing ? "active" : ""}`}
              to="/?feed=following"
            >
              Your Feed
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link className={`nav-link ${isGlobal ? "active" : ""}`} to="/">
            Global Feed
          </Link>
        </li>

        {tag && (
          <li className="nav-item">
            <Link className="nav-link active" to={`/tag/${encodeURIComponent(tag)}`}>
              <i className="ion-pound"></i> {tag}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default FeedToggler;
