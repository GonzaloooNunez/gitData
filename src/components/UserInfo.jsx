// src/components/UserInfo.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

const UserInfo = ({ username }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (username) {
      dispatch(fetchUser(username));
    }
  }, [username, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login} avatar`} />
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
