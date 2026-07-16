import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesPagination from "../../components/ArticlesPagination";
import ArticlesPreview from "../../components/ArticlesPreview";
import useArticleList from "../../hooks/useArticles";

function ProfileArticles() {
  const { username } = useParams();
  const [page, setPage] = useState(1);

  const { articles, articlesCount, loading, setArticlesData } = useArticleList({
    location: "profile",
    page,
    username,
  });

  return loading ? (
    <div className="article-preview">
      <em>Loading {username} articles...</em>
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
    <div className="empty-feed-message">{username} doesn't have articles.</div>
  );
}

export default ProfileArticles;
