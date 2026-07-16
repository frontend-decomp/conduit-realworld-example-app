import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import dateFormatter from "../../helpers/dateFormatter";
import deleteComment from "../../services/deleteComment";
import CommentAuthor from "./CommentAuthor";

function CommentList({ comments, removeComment }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { headers, isAuth, loggedUser } = useAuth();
  const { slug } = useParams();

  const handleClick = (commentId) => {
    if (!isAuth) return alert("You need to login first");

    deleteComment({ commentId, headers, slug })
      .then(() => {
        setErrorMessage("");
        removeComment(commentId);
      })
      .catch(setErrorMessage);
  };

  return (
    <>
      {errorMessage && <span className="error-messages">{errorMessage}</span>}

      {comments?.length > 0 ? (
        comments.map(({ author, author: { username } = {}, body, createdAt, id }) => {
          return (
            <div className="card" key={id}>
              <div className="card-block">
                <p className="card-text">{body}</p>
              </div>
              <div className="card-footer">
                <CommentAuthor {...author} />
                <span className="date-posted">{dateFormatter(createdAt)}</span>
                {isAuth && loggedUser.username === username && (
                  <span className="mod-options">
                    <i className="ion-trash-a" onClick={() => handleClick(id)}></i>
                  </span>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>There are no comments yet...</div>
      )}
    </>
  );
}

export default CommentList;
