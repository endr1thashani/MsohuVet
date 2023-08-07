import React, { useState } from "react";
import {data} from "./JsonDataHTML";
import ReactPaginate from "react-paginate";
const LearnHtml = () => {
  const [lessions] = useState(data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const lessionsPerPage = 1;
  const pagesVisited = pageNumber * lessionsPerPage;

  const displayLessions = lessions
    .slice(pagesVisited, pagesVisited + lessionsPerPage)
    .map((lession) => {
      return (
        <div className="flex flex-col w-full h-screen items-start p-[10px] max-w-[1240px] mx-auto md:p-0">
          <h1 className="text-2xl font-bold md:text-5xl my-[30px]">{lession.titulli}</h1>
          <h3 className="text-[16px] md:text-xl  font-bold mt-[20px]">{lession.pytja}</h3>
          <p className="text-gray-700 text-[14px] md:text-[18px] mb-[10px]">{lession.pergjigje}</p>
          <h2 className="text-[18px] md:text-xl font-bold mb-[20px]">{lession.shembulli1}</h2>
          <img className="mx-auto w-full h-screen max-h-[500px]" src={lession.fotoshembulli1} alt="foto"/>
        </div>
      );
    });

  const pageCount = Math.ceil(lessions.length / lessionsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex w-full h-screen flex-col items-center  md:mb-[140px]">
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

export default LearnHtml