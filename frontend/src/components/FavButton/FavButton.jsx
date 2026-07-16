import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import toggleFav from "../../services/toggleFav";

function FavButton({ favorited, favoritesCount, handler, right, slug, text }) {
  const [loading, setLoading] = useState(false);
  const { headers, isAuth } = useAuth();

  const buttonPosition = right ? "pull-xs-right" : "";
  const buttonClass = favorited ? "btn-primary" : "btn-outline-primary";
  const actionLabel = favorited ? "Unfavorite" : "Favorite";
  const buttonText = text ? `${actionLabel} Article` : actionLabel;

  const handleClick = () => {
    if (!isAuth) return alert("You need to login first");

    setLoading(true);

    toggleFav({ slug, favorited, headers })
      .then(handler)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <button
      className={`btn btn-sm ${buttonClass} ${buttonPosition}`}
      disabled={loading}
      onClick={handleClick}
    >
      <i className="ion-heart"></i> {buttonText}
      <span className="counter"> ( {favoritesCount} )</span>
    </button>
  );
}

export default FavButton;
