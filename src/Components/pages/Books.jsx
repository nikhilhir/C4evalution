import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
 ${'' /* //add required style here */}
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    fetch("http://localhost:8080/books").then(function (res) {
      res.json().then(function (data) {
        setData(data);
      });
    });
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((el) => {
          return <BookCard key={el.id} props={el} />;
        })}
      </Grid>
    </>
  );
};
export default Books;
