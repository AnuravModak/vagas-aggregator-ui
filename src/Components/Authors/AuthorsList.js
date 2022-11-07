import useLoadAll from "../../Hooks/useLoadAll";
import  PlaceholderList  from "../Placeholder/PlaceholderList";
import { FormatDate } from "../../Helpers/FormatDate";
import classNames from "classnames";
import AuthorItem from "./AuthorItem";

const AuthorsList = () => {
  const [authors, allAuthorsLoaded, lastModified] = useLoadAll("authors", {
    per_page: 100,
  });
  return (
    <div className="row mt-2 ml-1 mr-1">
      <div className="justify-content-center">
        <div className="alert alert-secondary text-center col-xs-6 col-lg-6 offset-lg-3">
          Recrutadores:{" "}
          <span
            className={classNames("badge roudend-pill", {
              "bg-danger": authors.length === 0,
              "bg-warning": !allAuthorsLoaded,
              "bg-success": allAuthorsLoaded && authors.length > 0,
            })}
          >
            {allAuthorsLoaded
              ? authors.length
              : "Carregando página " + authors.length + "..."}
          </span>
          <br />
          {!allAuthorsLoaded && (
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-label="Success example"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          )}
          {allAuthorsLoaded && (
            <span className="badge bg-info">
              Atualizado em: {FormatDate(new Date(lastModified))}
            </span>
          )}
        </div>
      </div>
      {!allAuthorsLoaded && <PlaceholderList type="author" quantity={100} />}
      {allAuthorsLoaded &&
        authors.map((author) => {
          return <AuthorItem author={author} key={author.id} />;
        })}
    </div>
  );
};

export default AuthorsList;