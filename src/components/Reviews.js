import React, { useCallback, useEffect } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import * as reviewActions from "../store/actions/reviews";
import ReviewCard from "./ReviewCard";
import { useLocation } from "react-router-dom";

const reviewAction = (pathname) => {
  let action;
  if (pathname === "/reviews") {
    action = reviewActions.fetchReviews();
  }

  if (pathname === "/reviews/user") {
    action = reviewActions.fetchUserReviews();
  }

  if (pathname === "/reviews/liked") {
    action = reviewActions.fetchFavoritesReviews();
  }

  return action;
};

const Reviews = (props) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const location = useLocation();

  console.log(`location: ${JSON.stringify(location)}`);

  const loadReviews = useCallback(async () => {
    try {
      await dispatch(reviewAction(location.pathname));
    } catch (error) {
      console.log("Erro ao buscar as reviews");
    }
  }, [dispatch, location]);

  useEffect(() => {
    loadReviews().then(() => {});
  }, [dispatch, loadReviews]);

  return (
    <div
      id="card-container"
      style={{
        display: "flex",
        marginLeft: "10px",
        marginTop: "10px",
      }}
    >
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <ReviewCard reviews={reviews} />
      </Row>
    </div>
  );
};

export default Reviews;
