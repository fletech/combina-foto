import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { DataMovies } from "../data";
import styled from "styled-components";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(DataMovies);

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((dataMovie) => dataMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details>
          <h1>{movie.title}</h1>
          <div>
            <img src={movie.mainImg} alt="" />
          </div>
        </Details>
      )}
    </>
  );
};
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 3rem 0rem;
    color: white;
    width: 100%;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 70%;
    height: auto;
    img {
      width: auto;
      height: 70vh;
    }
  }
`;
export default MovieDetail;
