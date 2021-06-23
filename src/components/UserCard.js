import { Card, Col } from "antd";

const UserCard = (props) => {
  //   const elements = Array.from(Array(18).keys());

  return props.users.map((elem) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={4} key={elem.id}>
        <Card title={elem.nickname} bordered={false} key={elem.id} loading={props.isLoading}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1em",
            }}
          >
            <img
              style={{ height: 200, width: 200, borderRadius: 100 }}
              src="https://images.unsplash.com/photo-1621803495185-208bdf587f80?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="user"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              width: "max-content",
            }}
          >
            <span>Livros lidos: {elem.following.length}</span>
            <span>Resenhas feitas: {elem.books.length}</span>
            <span>Seguindo: {elem.reviews.length}</span>
          </div>
        </Card>
      </Col>
    );
  });
};

export default UserCard;
