import { Card, Col, Tooltip, Button } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ExpandAltOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ReviewCard = (props) => {
  return props.reviews.map((elem) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6} key={elem.id}>
        <Card title={elem.bookTitle} bordered={false} key={elem.id}>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 10,
              WebkitBoxOrient: "vertical",
            }}
          >
            {elem.review}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1em",
            }}
          >
            <Tooltip title="curtir">
              <Button size="middle" shape="circle" icon={<HeartOutlined />} />
            </Tooltip>

            <Tooltip title="descurtir">
              <Button size="middle" shape="circle" icon={<HeartFilled />} />
            </Tooltip>

            <Tooltip title="Ler">
              <Button
                size="middle"
                shape="circle"
                icon={<ExpandAltOutlined />}
              />
            </Tooltip>

            <Tooltip title="Editar">
              <Button size="middle" shape="circle" icon={<EditOutlined />} />
            </Tooltip>

            <Tooltip title="Excluir">
              <Button size="middle" shape="circle" icon={<DeleteOutlined />} />
            </Tooltip>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{elem.insertDate}</span>
            <span>{elem.user.nickname}</span>
          </div>
        </Card>
      </Col>
    );
  });
};

export default ReviewCard;
