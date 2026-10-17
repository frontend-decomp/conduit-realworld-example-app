# Frontend source inventory (`frontend/src/`)

A file-by-file inventory of the frontend source tree. It records what is there and what each file does. It does not analyse imports or propose restructuring.

- **Snapshot:** commit `a02a8bd`
- **Scope:** everything under `frontend/src/`, including hidden files (none found)
- **Coverage:** 36 of 36 directories inspected, 95 of 95 files inventoried

## How this was produced

1. Listed every directory and file under `frontend/src/` with `find`, and read every text file. The one image was identified with `file`.
2. Recorded each file's type, primary responsibility, feature domain, whether it is shared, and whether it is a barrel (re-export) file.

**Column meanings**

- **Shared:** "Yes" means more than one component, route or feature uses the file. This was judged from file contents during the inventory
- **Barrel:** "Yes" means the file only re-exports another module (every `index.js` here is `export { default } from "./X"`).

## Totals

| Category | Count |
|---|---|
| Directories | 36 |
| Files | 95 |
| Barrel `index.js` files | 26 |
| JSX files (entry, app shell, context, components, routes) | 43 |
| API / auth services | 16 |
| Helpers | 2 |
| Tests | 2 |
| Hooks | 1 |
| Other JS (`reportWebVitals.js`, `setupTests.js`) | 2 |
| CSS | 2 |
| Images | 1 |

## Directory checklist

| # | Directory | Inspected | Files | Subdirectories |
|---|---|---|---|---|
| 1 | `.` (src) | ✅ | App.jsx, index.css, main.jsx, reportWebVitals.js, setupTests.js, styles.css | assets, components, context, helpers, hooks, routes, services |
| 2 | assets | ✅ | smiley-cyrus.jpeg | — |
| 3 | components | ✅ | — | 26 component folders (rows 4–29) |
| 4 | components/ArticleAuthorButtons | ✅ | ArticleAuthorButtons.jsx, index.js | — |
| 5 | components/ArticleEditorForm | ✅ | ArticleEditorForm.jsx, index.js | — |
| 6 | components/ArticleMeta | ✅ | ArticleMeta.jsx, index.js | — |
| 7 | components/ArticleTags | ✅ | ArticleTags.jsx, index.js | — |
| 8 | components/ArticlesButtons | ✅ | ArticlesButtons.jsx, index.js | — |
| 9 | components/ArticlesPagination | ✅ | ArticlesPagination.jsx, index.js | — |
| 10 | components/ArticlesPreview | ✅ | ArticlesPreview.jsx, index.js | — |
| 11 | components/AuthPageContainer | ✅ | AuthPageContainer.jsx, index.js | — |
| 12 | components/AuthorInfo | ✅ | AuthorInfo.jsx, index.js | — |
| 13 | components/Avatar | ✅ | Avatar.jsx, index.js | — |
| 14 | components/BannerContainer | ✅ | BannerContainer.jsx, index.js | — |
| 15 | components/CommentEditor | ✅ | CommentEditor.jsx, index.js | — |
| 16 | components/CommentList | ✅ | CommentAuthor.jsx, CommentList.jsx, index.js | — |
| 17 | components/ContainerRow | ✅ | ContainerRow.jsx, index.js | — |
| 18 | components/FavButton | ✅ | FavButton.jsx, index.js | — |
| 19 | components/FeedToggler | ✅ | FeedToggler.jsx, index.js | — |
| 20 | components/FollowButton | ✅ | FollowButton.jsx, index.js | — |
| 21 | components/Footer | ✅ | Footer.jsx, index.js | — |
| 22 | components/FormFieldset | ✅ | FormFieldset.jsx, index.js | — |
| 23 | components/LoginForm | ✅ | LoginForm.jsx, index.js | — |
| 24 | components/NavItem | ✅ | NavItem.jsx, index.js | — |
| 25 | components/Navbar | ✅ | Navbar.jsx, index.js | — |
| 26 | components/PopularTags | ✅ | PopularTags.jsx, TagButton.jsx, index.js | — |
| 27 | components/SettingsForm | ✅ | SettingsForm.jsx, index.js | — |
| 28 | components/SignUpForm | ✅ | SignUpForm.jsx, index.js | — |
| 29 | components/SourceCodeLink | ✅ | SourceCodeLink.jsx, index.js | — |
| 30 | context | ✅ | AuthContext.jsx | — |
| 31 | helpers | ✅ | dateFormatter.js, dateFormatter.test.js, errorHandler.js, errorHandler.test.js | — |
| 32 | hooks | ✅ | useArticles.js | — |
| 33 | routes | ✅ | ArticleEditor.jsx, Home.jsx, HomeArticles.jsx, Login.jsx, NotFound.jsx, Settings.jsx, SignUp.jsx | Article, Profile |
| 34 | routes/Article | ✅ | Article.jsx, CommentsSection.jsx | — |
| 35 | routes/Profile | ✅ | Profile.jsx, ProfileArticles.jsx, ProfileFavArticles.jsx | — |
| 36 | services | ✅ | 16 files (listed below) | — |

## File inventory

Paths are relative to `frontend/src/`.

### `.` (src root): 6 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| App.jsx | JSX component | Root layout: Navbar header, router Outlet, Footer | Layout / app shell | Yes (wraps all routes) | No |
| index.css | CSS | Small global overrides (pagination, sticky header, not-found page, cursor-pointer) | Global styling | Yes | No |
| main.jsx | JSX entry | Starts the app: ReactDOM root, BrowserRouter, AuthProvider, full route table, global CSS imports, reportWebVitals call | Entry / routing | Yes | No |
| reportWebVitals.js | JS | Optional web-vitals performance reporting (CRA boilerplate) | Tooling / performance | No | No |
| setupTests.js | JS (test setup) | Loads `@testing-library/jest-dom` matchers for tests (CRA boilerplate) | Testing | Yes (tests) | No |
| styles.css | CSS | Main Conduit theme stylesheet (1526 lines, "Conduit Minimal CSS v4") | Global styling | Yes | No |

### assets: 1 file

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| assets/smiley-cyrus.jpeg | Image (JPEG, 128×128) | **Uncertain.** No file in `src/` refers to it | Unknown (possibly an avatar or demo image) | Unknown | No |

### components: 54 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| components/ArticleAuthorButtons/ArticleAuthorButtons.jsx | JSX component | Delete / Edit buttons shown to the article's author | Articles (view) | No | No |
| components/ArticleAuthorButtons/index.js | JS | Re-exports default ArticleAuthorButtons | Articles (view) | No | Yes |
| components/ArticleEditorForm/ArticleEditorForm.jsx | JSX component | Create/edit article form (title, description, body, tags); loads the existing article and submits | Articles (editor) | No | No |
| components/ArticleEditorForm/index.js | JS | Re-exports default ArticleEditorForm | Articles (editor) | No | Yes |
| components/ArticleMeta/ArticleMeta.jsx | JSX component | Author avatar/name link and formatted date, with a slot for action buttons | Articles | Yes (article page + list) | No |
| components/ArticleMeta/index.js | JS | Re-exports default ArticleMeta | Articles | Yes | Yes |
| components/ArticleTags/ArticleTags.jsx | JSX component | Renders an article's tags as pills | Articles / Tags | Yes (article page + list) | No |
| components/ArticleTags/index.js | JS | Re-exports default ArticleTags | Articles / Tags | Yes | Yes |
| components/ArticlesButtons/ArticlesButtons.jsx | JSX component | On the article page, shows author buttons or Follow + Favorite buttons | Articles (view) | No | No |
| components/ArticlesButtons/index.js | JS | Re-exports default ArticlesButtons | Articles (view) | No | Yes |
| components/ArticlesPagination/ArticlesPagination.jsx | JSX component | Page-number pagination for article lists | Articles (lists) | Yes (home + profile) | No |
| components/ArticlesPagination/index.js | JS | Re-exports default ArticlesPagination | Articles (lists) | Yes | Yes |
| components/ArticlesPreview/ArticlesPreview.jsx | JSX component | Article preview cards with a favorite button; updates the list after favoriting | Articles (lists) | Yes (home + profile) | No |
| components/ArticlesPreview/index.js | JS | Re-exports default ArticlesPreview | Articles (lists) | Yes | Yes |
| components/AuthPageContainer/AuthPageContainer.jsx | JSX component | Auth page layout: title, link to the other auth page, error list, form slot | Auth | Yes (login + sign-up) | No |
| components/AuthPageContainer/index.js | JS | Re-exports default AuthPageContainer | Auth | Yes | Yes |
| components/AuthorInfo/AuthorInfo.jsx | JSX component | Profile header: fetches the profile; shows avatar, markdown bio, and Follow or Edit Settings | Profile | No | No |
| components/AuthorInfo/index.js | JS | Re-exports default AuthorInfo | Profile | No | Yes |
| components/Avatar/Avatar.jsx | JSX component | User image, falling back to `/default-avatar.svg` | UI primitive / users | Yes (5 components) | No |
| components/Avatar/index.js | JS | Re-exports default Avatar | UI primitive / users | Yes | Yes |
| components/BannerContainer/BannerContainer.jsx | JSX component | Banner wrapper markup | UI primitive / layout | Yes (home + article) | No |
| components/BannerContainer/index.js | JS | Re-exports default BannerContainer | UI primitive / layout | Yes | Yes |
| components/CommentEditor/CommentEditor.jsx | JSX component | New-comment form, or a sign-in prompt for logged-out users; posts the comment | Comments | No | No |
| components/CommentEditor/index.js | JS | Re-exports default CommentEditor | Comments | No | Yes |
| components/CommentList/CommentAuthor.jsx | JSX component | Comment author avatar and name links (sub-component of CommentList) | Comments | No | No |
| components/CommentList/CommentList.jsx | JSX component | Lists comments; users can delete their own | Comments | No | No |
| components/CommentList/index.js | JS | Re-exports default CommentList (not CommentAuthor) | Comments | No | Yes |
| components/ContainerRow/ContainerRow.jsx | JSX component | `container` + `row` layout wrapper | UI primitive / layout | Yes (5 users) | No |
| components/ContainerRow/index.js | JS | Re-exports default ContainerRow | UI primitive / layout | Yes | Yes |
| components/FavButton/FavButton.jsx | JSX component | Favorite/unfavorite toggle button with count | Articles / Favorites | Yes (article page + list) | No |
| components/FavButton/index.js | JS | Re-exports default FavButton | Articles / Favorites | Yes | Yes |
| components/FeedToggler/FeedToggler.jsx | JSX component | Your Feed / Global Feed / tag tabs on the home page | Home / Feed | No | No |
| components/FeedToggler/index.js | JS | Re-exports default FeedToggler | Home / Feed | No | Yes |
| components/FollowButton/FollowButton.jsx | JSX component | Follow/unfollow toggle button with count | Profiles / Follow | Yes (article page + profile) | No |
| components/FollowButton/index.js | JS | Re-exports default FollowButton | Profiles / Follow | Yes | Yes |
| components/Footer/Footer.jsx | JSX component | Site footer with attribution and source link | Layout | No | No |
| components/Footer/index.js | JS | Re-exports default Footer | Layout | No | Yes |
| components/FormFieldset/FormFieldset.jsx | JSX component | Generic input fieldset | UI primitive / forms | Yes (4 forms) | No |
| components/FormFieldset/index.js | JS | Re-exports default FormFieldset | UI primitive / forms | Yes | Yes |
| components/LoginForm/LoginForm.jsx | JSX component | Email/password login form; sets auth state | Auth (login) | No | No |
| components/LoginForm/index.js | JS | Re-exports default LoginForm | Auth (login) | No | Yes |
| components/NavItem/NavItem.jsx | JSX component | NavLink list item with active class and optional icon | UI primitive / navigation | Yes (navbar + profile tabs) | No |
| components/NavItem/index.js | JS | Re-exports default NavItem | UI primitive / navigation | Yes | Yes |
| components/Navbar/Navbar.jsx | JSX component | Top navigation; links depend on login state; shows a "Connecting…" status | Layout / Auth | No | No |
| components/Navbar/index.js | JS | Re-exports default Navbar | Layout | No | Yes |
| components/PopularTags/PopularTags.jsx | JSX component | Sidebar that fetches and shows popular tags | Tags (home) | No | No |
| components/PopularTags/TagButton.jsx | JSX component | Renders up to 50 tag links (sub-component of PopularTags) | Tags (home) | No | No |
| components/PopularTags/index.js | JS | Re-exports default PopularTags (not TagButton) | Tags (home) | No | Yes |
| components/SettingsForm/SettingsForm.jsx | JSX component | User settings form (image, username, bio, email, password); update and logout | Settings / User | No | No |
| components/SettingsForm/index.js | JS | Re-exports default SettingsForm | Settings / User | No | Yes |
| components/SignUpForm/SignUpForm.jsx | JSX component | Registration form; sets auth state | Auth (sign-up) | No | No |
| components/SignUpForm/index.js | JS | Re-exports default SignUpForm | Auth (sign-up) | No | Yes |
| components/SourceCodeLink/SourceCodeLink.jsx | JSX component | GitHub source code link | Layout | Yes (navbar + footer) | No |
| components/SourceCodeLink/index.js | JS | Re-exports default SourceCodeLink | Layout | Yes | Yes |

### context: 1 file

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| context/AuthContext.jsx | JSX (context + provider) | Auth state provider and `useAuth` hook; keeps the token in localStorage; fetches the current user; sets a `window.__conduit_debug__` debug object | Auth (cross-cutting) | Yes (most features) | No |

### helpers: 4 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| helpers/dateFormatter.js | JS | Formats a date as "Month D, YYYY" | Utility | Yes (article meta + comments) | No |
| helpers/dateFormatter.test.js | JS (test) | Unit test for dateFormatter | Utility / Testing | No | No |
| helpers/errorHandler.js | JS | Turns axios errors into user-facing messages, which it throws | Utility / API | Yes (most services) | No |
| helpers/errorHandler.test.js | JS (test) | Unit tests: errorHandler throws for 401/403/404/422/500 | Utility / Testing | No | No |

### hooks: 1 file

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| hooks/useArticles.js | JS (React hook) | Fetches paginated article lists by location (feed, global, tag, profile, favorites) | Articles (lists) | Yes (home + profile routes) | No |

### routes: 7 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| routes/ArticleEditor.jsx | Route component | Editor page hosting ArticleEditorForm (`/editor`, `/editor/:slug`) | Articles (editor) | No | No |
| routes/Home.jsx | Route component | Home page: banner (when logged out), feed tabs, Outlet, popular tags | Home / Feed | No | No |
| routes/HomeArticles.jsx | Route component | Home article list (global, following, tag); page number kept in the URL | Home / Feed | No | No |
| routes/Login.jsx | Route component | Login page (`/login`) | Auth (login) | No | No |
| routes/NotFound.jsx | Route component | 404 page | Layout / error | No | No |
| routes/Settings.jsx | Route component | Settings page (`/settings`) | Settings / User | No | No |
| routes/SignUp.jsx | Route component | Registration page (`/register`) | Auth (sign-up) | No | No |

### routes/Article: 2 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| routes/Article/Article.jsx | Route component | Article page (`/article/:slug`): fetches the article; renders markdown body, meta, buttons, Outlet | Articles (view) | No | No |
| routes/Article/CommentsSection.jsx | Route component | Comments area (index child of the article route): fetches, adds and removes comments | Comments | No | No |

### routes/Profile: 3 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| routes/Profile/Profile.jsx | Route component | Profile page (`/profile/:username`): author info, tabs, Outlet | Profile | No | No |
| routes/Profile/ProfileArticles.jsx | Route component | Profile tab listing the user's articles | Profile / Articles | No | No |
| routes/Profile/ProfileFavArticles.jsx | Route component | Profile tab listing articles the user favorited | Profile / Favorites | No | No |

### services: 16 files

| Path | Type | Primary responsibility | Domain | Shared | Barrel |
|---|---|---|---|---|---|
| services/deleteArticle.js | API service | `DELETE /api/articles/:slug/` | Articles | No | No |
| services/deleteComment.js | API service | `DELETE /api/articles/:slug/comments/:id` | Comments | No | No |
| services/getArticle.js | API service | `GET /api/articles/:slug` | Articles | Yes (article view + editor) | No |
| services/getArticles.js | API service | GET article lists (feed, global, tag, author, favorited) with limit/offset | Articles (lists) | No (only useArticles) | No |
| services/getComments.js | API service | `GET /api/articles/:slug/comments` | Comments | No | No |
| services/getProfile.js | API service | `GET /api/profiles/:username` | Profile | No | No |
| services/getTags.js | API service | `GET /api/tags` | Tags | No | No |
| services/getUser.js | API service | `GET /api/user`; labels errors as `auth` or `unavailable` | Auth | No (only AuthContext) | No |
| services/postComment.js | API service | `POST /api/articles/:slug/comments` | Comments | No | No |
| services/setArticle.js | API service | POST (create) or PUT (update) an article; returns the slug | Articles (editor) | No | No |
| services/toggleFav.js | API service | `POST` / `DELETE /api/articles/:slug/favorite` | Articles / Favorites | No | No |
| services/toggleFollow.js | API service | `POST` / `DELETE /api/profiles/:username/follow` | Profiles / Follow | No | No |
| services/userLogin.js | API service | `POST /api/users/login`; returns auth state | Auth (login) | No | No |
| services/userLogout.js | Service (no network) | Clears the localStorage token; returns logged-out auth state | Auth (logout) | No | No |
| services/userSignUp.js | API service | `POST /api/users`; returns auth state | Auth (sign-up) | No | No |
| services/userUpdate.js | API service | `PUT /api/user`; returns updated auth state | Settings / User | No | No |
