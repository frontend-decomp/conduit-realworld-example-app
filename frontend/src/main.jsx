import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import "./styles.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Article from "./pages/ArticlePage";
import CommentsSection from "./pages/CommentsSectionPage";
import ArticleEditor from "./pages/ArticleEditorPage";
import Home from "./pages/HomePage";
import HomeArticles from "./pages/FeedArticlesPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";
import Profile from "./pages/ProfilePage";
import ProfileArticles from "./pages/ProfileArticlesPage";
import ProfileFavArticles from "./pages/ProfileFavArticlesPage";
import Settings from "./pages/SettingsPage";
import SignUp from "./pages/SignUpPage";

// React.StrictMode's development-mode double-invoke behavior can cause a
// single real click to fire its handler twice, which Playwright's network
// mocking can't tell apart from a genuine double-request bug - skip it only
// for e2e runs (see playwright.config.ts's webServer env), not local dev.
const StrictModeOrFragment = import.meta.env.VITE_E2E === "true" ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictModeOrFragment>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />}>
              <Route index element={<HomeArticles />} />
              <Route path="tag/:tag" element={<HomeArticles />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />

            <Route path="settings" element={<Settings />} />

            <Route path="editor" element={<ArticleEditor />}>
              <Route path=":slug" element={<ArticleEditor />} />
            </Route>

            <Route path="article/:slug" element={<Article />}>
              <Route index element={<CommentsSection />} />
            </Route>

            <Route path="profile/:username" element={<Profile />}>
              <Route index element={<ProfileArticles />} />
              <Route path="favorites" element={<ProfileFavArticles />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictModeOrFragment>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
