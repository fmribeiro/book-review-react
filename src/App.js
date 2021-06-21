import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import booksReducer from "./store/reducers/books";
import reviewsReducer from "./store/reducers/reviews";
import usersReducer from "./store/reducers/users";

import "./App.css";
import Home from "./components/Home";

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  books: booksReducer,
  users: usersReducer,
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
