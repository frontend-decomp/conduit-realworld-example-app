import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import getArticle from "../../services/getArticle";
import setArticle from "../../services/setArticle";
import FormFieldset from "../FormFieldset";

const emptyForm = { title: "", description: "", body: "", tagList: [] };

function ArticleEditorForm() {
  const { state } = useLocation();
  const [{ title, description, body, tagList }, setForm] = useState(
    state ? { ...emptyForm, ...state, tagList: state.tagList || [] } : emptyForm,
  );
  const [tagInput, setTagInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuth, headers, loggedUser, status } = useAuth();

  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const redirect = () => navigate("/", { replace: true, state: null });
    if (!isAuth) return redirect();

    if (state || !slug) return;
    if (status === "loading") return;

    getArticle({ headers, slug })
      .then(({ author: { username } = {}, body, description, tagList, title }) => {
        if (username !== loggedUser.username) redirect();

        setForm({ body, description, tagList: tagList || [], title });
      })
      .catch(console.error);

    return () => setForm(emptyForm);
  }, [headers, isAuth, loggedUser.username, navigate, slug, state, status]);

  const inputHandler = (e) => {
    const type = e.target.name;
    const value = e.target.value;

    setForm((form) => ({ ...form, [type]: value }));
  };

  const tagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const tagInputKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const tag = tagInput.trim();
    if (!tag) return;

    setForm((form) =>
      form.tagList.includes(tag)
        ? form
        : { ...form, tagList: [...form.tagList, tag] },
    );
    setTagInput("");
  };

  const removeTag = (tag) => {
    setForm((form) => ({
      ...form,
      tagList: form.tagList.filter((t) => t !== tag),
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setArticle({ headers, slug, body, description, tagList, title })
      .then((slug) => navigate(`/article/${slug}`))
      .catch(setErrorMessage);
  };

  return (
    <form onSubmit={formSubmit}>
      <fieldset>
        {errorMessage && <span className="error-messages">{errorMessage}</span>}
        <FormFieldset
          placeholder="Article Title"
          name="title"
          value={title}
          handler={inputHandler}
        ></FormFieldset>

        <FormFieldset
          normal
          placeholder="What's this article about?"
          name="description"
          value={description}
          handler={inputHandler}
        ></FormFieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
            name="body"
            value={body}
            onChange={inputHandler}
          ></textarea>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control"
            placeholder="Enter tags"
            value={tagInput}
            onChange={tagInputChange}
            onKeyDown={tagInputKeyDown}
          />
          <div className="tag-list">
            {tagList.map((tag) => (
              <span className="tag-default tag-pill" key={tag}>
                <i className="ion-close-round" onClick={() => removeTag(tag)}></i>{" "}
                {tag}
              </span>
            ))}
          </div>
        </fieldset>

        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  );
}

export default ArticleEditorForm;
