import React, { useState } from "react";
import JsonDataR from "./JsonDataR.json";
import ReactPaginate from "react-paginate";

const LearnReact = () => {
  const [lessions] = useState(JsonDataR.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const lessionsPerPage = 1;
  const pagesVisited = pageNumber * lessionsPerPage;

  const displayLessions = lessions
    .slice(pagesVisited, pagesVisited + lessionsPerPage)
    .map((lession) => {
      return (
        <div className="flex flex-col items-center justify-center max-w-[500px]">
          <h3>{lession.firstName}</h3>
          <h3>{lession.lastName}</h3>
          <h3>{lession.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(lessions.length / lessionsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center my-[50px]">
      {displayLessions}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default LearnReact