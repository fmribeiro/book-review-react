import React, { useCallback, useEffect } from "react";
import { Row } from "antd";

import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../store/actions/users";

// const Cards = () => {
//   const elements = Array.from(Array(18).keys());

//   return elements.map((elem) => {
//     return (
//       <Col xs={24} sm={12} md={12} lg={8} xl={4} key={elem}>
//         <Card title="Nome Sobrenome do usuário" bordered={false} key={elem}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginBottom: "1em",
//             }}
//           >
//             <img
//               style={{ height: 200, width: 200, borderRadius: 100 }}
//               src="https://images.unsplash.com/photo-1622673705547-2609427981ef?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
//             />
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               margin: "0 auto",
//               width: "max-content",
//             }}
//           >
//             <span>Livros lidos: 0</span>
//             <span>Resenhas feitas: 0</span>
//             <span>Seguindo: 0</span>
//           </div>
//         </Card>
//       </Col>
//     );
//   });
// };

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const loadUsers = useCallback(async () => {
    try {
      await dispatch(userActions.fetchUsers());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    loadUsers().then(() => {});
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
        <UserCard users={users} />
      </Row>
    </div>
  );
};

export default Users;
