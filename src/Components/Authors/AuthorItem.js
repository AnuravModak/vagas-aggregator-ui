import { Link } from "react-router-dom";

const AuthorItem = ({ author }) => {
    const githubUrl = "https://github.com/";
    const profileUrl = githubUrl + author.login;
    const url = "/?authors=" + author.login;
    return (
      <div className="card border-default mb-3 col-lg-2">
        <div className="card-header">
          <Link to={url}>
            <img
              src={author.avatar_url}
              alt={author.login}
              className="rounded-circle img-responsive"
              style={{ width: "48px" }}
            />
          </Link>
          &nbsp;
          <span className="badge bg-info rounded-pill">
            {author.issues} vaga{author.issues === 1 ? "" : "s"} publicada
            {author.issues === 1 ? "" : "s"}
          </span>
        </div>
        <div className="card-body">
          <Link to={url}>{author.login}</Link>
          <br />
          <div className="alert alert-warning mt-3 mb-3">
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              Ver perfil no GitHub <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default AuthorItem;