import React, { useCallback, useEffect } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "./BookCard";
import * as bookActions from "../store/actions/books";

// const BookCard = (props) => {
//   const elements = Array.from(Array(18).keys());
//   // const books = props.books;

//   return elements.map((elem) => {
//     return (
//       <Col xs={24} sm={12} md={12} lg={8} xl={4} key={elem}>
//         <Card title="Titulo do livro" bordered={false} key={elem}>
//           <div style={{ display: "flex", marginBottom: "1em" }}>
//             <img
//               src="http://books.google.com/books/content?id=S1LZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
//               alt="book cover"
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "1em",
//               }}
//             >
//               <span>Autor do livro</span>
//               <span>Editora do livro</span>
//               <span>234 páginas</span>
//             </div>
//           </div>

//           <p
//             style={{
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               display: "-webkit-box",
//               WebkitLineClamp: 10,
//               WebkitBoxOrient: "vertical",
//             }}
//           >
//             Como parte da Coleção Bezerra de Menezes, a Federação Espírita
//             Brasileira traz a lume o romance História de um sonho, uma
//             extraordinária viagem ao planeta Vênus pelo desprendimento do
//             Espírito durante o sono físico. Publicado originalmente como
//             folhetim no periódico Reformador, entre 1896 e 1897, este livro
//             espírita atende a duas finalidades: entretém como leitura agradável,
//             de texto bem escrito e instrui como trabalho doutrinário, destacando
//             em seu conteúdo princípios fundamentais do Espiritismo.
//           </p>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <span>09/06/2021 11:06</span>
//             <span>fmribeiro21</span>
//           </div>
//         </Card>
//       </Col>
//     );
//   });
// };

const Books = (props) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const loadBooks = useCallback(async () => {
    try {
      await dispatch(bookActions.fetchBooks());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    loadBooks().then(() => {});
  }, [dispatch, loadBooks]);

  return (
    <div
      id="card-container"
      style={{
        display: "flex",
        margin: "10px",
      }}
    >
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <BookCard books={books} />
      </Row>
    </div>
  );
};

export default Books;
