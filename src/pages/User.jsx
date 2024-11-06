import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return <div>{user.login}</div>;
}

export default User;
