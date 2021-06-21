import { Card, Col } from "antd";

const BookCard = (props) => {
  return props.books.map((book) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={4} key={book.id}>
        <Card title={book.title} bordered={false} key={book.id}>
          <div style={{ display: "flex", marginBottom: "1em" }}>
            <img src={book.imagePath} alt="book cover" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1em",
              }}
            >
              <span>{book.authors}</span>
              <span>{book.publisher}</span>
              <span>{book.pageCount}</span>
            </div>
          </div>

          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 10,
              WebkitBoxOrient: "vertical",
            }}
          >
            {book.description}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span> {book.insertDate}</span>
            <span> {book.user.nickname}</span>
          </div>
        </Card>
      </Col>
    );
  });
};

export default BookCard;
