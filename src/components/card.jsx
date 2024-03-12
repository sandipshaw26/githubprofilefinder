import "./style.css";
import "./theme.css";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    bio,
    company,
    message,
  } = user;
  function comp(company) {
    let cmp = company;
    if (cmp === null) {
      cmp = "Nothing to show";
    }
    return cmp;
  }
  function UserBio(bio) {
    let userbio = bio;
    if (bio === null) {
      userbio = "No Bio available in this profile";
    }
    return userbio;
  }
  if (message === "Not Found") {
    return (
      <div className="notFound">
        <i>{name}</i>
        <h1>The user is not found!</h1>
      </div>
    );
  } else {
    return (
      <div className="user">
        <div className="image">
          <img src={avatar_url} alt={`Avatar of ${user.name}`} />
        </div>
        <div>
          <h2>
            <a href={html_url} target="_blank">
              <i>{name}</i>
            </a>
          </h2>
        </div>
        <div>
          <h3>
            <strong>BIO: </strong>
            {UserBio(bio)}
          </h3>
        </div>
        <div>
          <h4>
            <strong>Followers:</strong> {followers}
          </h4>
          <h4>
            <strong>Following:</strong> {following}
          </h4>
        </div>
        <div className="company">
          <h3>Present Company: {comp(company)}</h3>
        </div>
        <h4>Total Repositories: {public_repos}</h4>
      </div>
    );
  }
}
