import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesPagination from "../../components/ArticlesPagination";
import ArticlesPreview from "../../components/ArticlesPreview";
import useArticleList from "../../hooks/useArticles";

function ProfileFavArticles() {
  const { username } = useParams();
  const [page, setPage] = useState(1);

  const { articles, articlesCount, loading, setArticlesData } = useArticleList({
    location: "favorites",
    page,
    username,
  });

  return loading ? (
    <div className="article-preview">
      <em>Loading {username} favorites articles...</em>
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
        onPageChange={setPage}
        page={page}
      />
    </>
  ) : (
    <div className="empty-feed-message">{username} doesn't have favorites.</div>
  );
}

export default ProfileFavArticles;
