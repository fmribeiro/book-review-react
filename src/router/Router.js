import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../components/Auth";
import Books from "../components/Books";
import Reviews from "../components/Reviews";
import Users from "../components/Users";

function PrivateRoute({ children, ...rest }) {
  const [isAuth, setIsAuth] = useState(true);
  // const isAuth = useSelector((state) => !!state.auth.token);
  console.log("rota privada");
  // let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// const PrivateRoute = ({ children, ...rest }) => {
//   const isAuth = useSelector((state) => !!state.auth.token);
//   console.log("rota privada")

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuth ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/auth",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/reviews/liked">
        <Reviews />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>

      <PrivateRoute path="/user/reviews/favorites">
        <Reviews />
      </PrivateRoute>
      <PrivateRoute path="/user/reviews/mine">
        <Reviews />
      </PrivateRoute>

      <PrivateRoute path="/user/books/read">
        <Books />
      </PrivateRoute>
      <PrivateRoute path="/user/books/wishlist">
        <Books />
      </PrivateRoute>

      <PrivateRoute path="/user/following">
        <Users />
      </PrivateRoute>
      <PrivateRoute path="/user/reviews/following">
        <Reviews />
      </PrivateRoute>
      <Route path="/">
        <Reviews />
      </Route>
    </Switch>
  );
};
// <Route path="/user/messages">
//   <Users />
// </Route>
export default AppRouter;
