import { Link } from "react-router-dom";

function TagButton({ tagsList }) {
  return tagsList.slice(0, 50).map((name) => (
    <Link
      className="tag-pill tag-default"
      key={name}
      to={`/tag/${encodeURIComponent(name)}`}
    >
      {name}
    </Link>
  ));
}

export default TagButton;
