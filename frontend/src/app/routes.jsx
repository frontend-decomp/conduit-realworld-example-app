import { Route, Routes } from "react-router-dom";
import App from "./App";
import ArticleEditorPage from "../pages/ArticleEditorPage";
import ArticlePage from "../pages/ArticlePage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import SignUpPage from "../pages/SignUpPage";
import CommentsSectionPage from "../pages/CommentsSectionPage";
import FeedArticlesPage from "../pages/FeedArticlesPage";
import HomePage from "../pages/HomePage";
import ProfileArticlesPage from "../pages/ProfileArticlesPage";
import ProfileFavArticlesPage from "../pages/ProfileFavArticlesPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />}>
          <Route index element={<FeedArticlesPage />} />
          <Route path="tag/:tag" element={<FeedArticlesPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />

        <Route path="settings" element={<SettingsPage />} />

        <Route path="editor" element={<ArticleEditorPage />}>
          <Route path=":slug" element={<ArticleEditorPage />} />
        </Route>

        <Route path="article/:slug" element={<ArticlePage />}>
          <Route index element={<CommentsSectionPage />} />
        </Route>

        <Route path="profile/:username" element={<ProfilePage />}>
          <Route index element={<ProfileArticlesPage />} />
          <Route path="favorites" element={<ProfileFavArticlesPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
