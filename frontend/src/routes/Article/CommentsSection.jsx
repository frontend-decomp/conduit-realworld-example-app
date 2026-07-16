import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentEditor from "../../components/CommentEditor";
import CommentList from "../../components/CommentList";
import getComments from "../../services/getComments";

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getComments({ slug }).then(setComments);
  }, [slug]);

  const addComment = (comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  const removeComment = (commentId) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <CommentEditor addComment={addComment} />
        <CommentList comments={comments} removeComment={removeComment} />
      </div>
    </div>
  );
}

export default CommentsSection;
