import React, { useCallback, useEffect, useState } from "react";
import { Row } from "antd";

import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../store/actions/users";
import { useLocation } from "react-router-dom";

const userAction = (pathname) => {
  let action;
  if (pathname === "/users") {
    action = userActions.fetchUsers();
  }

  if (pathname === "/user/following") {
    action = userActions.fetchUsers();
    // action = userActions.fetchFollowingUsers();
  }

  return action;
};

const Users = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      // setTimeout(() => {alert("stop")}, 2000);
      await dispatch(userAction(location.pathname));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location.pathname]);

  useEffect(() => {
    loadUsers().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadUsers]);

  return (
    <div
      id="card-container"
      style={{
        display: "flex",
        margin: "10px",
      }}
    >
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <UserCard users={users} isLoading={isLoading} />
      </Row>
    </div>
  );
};

export default Users;
