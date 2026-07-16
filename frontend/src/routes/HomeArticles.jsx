import { useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ArticlesPagination from "../components/ArticlesPagination";
import ArticlesPreview from "../components/ArticlesPreview";
import { useAuth } from "../context/AuthContext";
import useArticleList from "../hooks/useArticles";

function HomeArticles() {
  const { isAuth } = useAuth();
  const { tag } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const isFollowing = searchParams.get("feed") === "following";
  const page = Math.max(1, parseInt(searchParams.get("page"), 10) || 1);
  const location = tag ? "tag" : isFollowing ? "feed" : "global";

  useEffect(() => {
    if (isFollowing && !isAuth) navigate("/login", { replace: true });
  }, [isFollowing, isAuth, navigate]);

  const { articles, articlesCount, loading, setArticlesData } = useArticleList({
    location,
    page,
    tagName: tag,
  });

  const handlePageChange = (nextPage) => {
    const next = new URLSearchParams(searchParams);
    if (nextPage <= 1) next.delete("page");
    else next.set("page", String(nextPage));
    setSearchParams(next);
  };

  if (isFollowing && !isAuth) return null;

  return loading ? (
    <div className="article-preview">
      <em>Loading articles list...</em>
    </div>
  ) : articles.length > 0 ? (
    <>
      <ArticlesPreview
        articles={articles}
        loading={loading}
        updateArticles={setArticlesData}
      />

      <ArticlesPagination
        articlesCount={articlesCount}
        onPageChange={handlePageChange}
        page={page}
      />
    </>
  ) : isFollowing ? (
    <div className="empty-feed-message">
      Your feed is empty. Follow some users or check out the{" "}
      <Link to="/">Global Feed</Link>.
    </div>
  ) : (
    <div className="empty-feed-message">No articles here... yet.</div>
  );
}

export default HomeArticles;
