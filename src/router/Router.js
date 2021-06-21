import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";
import Books from "../components/Books";
import Reviews from "../components/Reviews";
import Users from "../components/Users";

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
      <Route path="/">
        <Reviews />
      </Route>
    </Switch>
  );
};

export default AppRouter;
