import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useCharacters} from "../api/useData";

const Pagination = ({pageNumber,info,setPageNumber}) => {


    return (

            <div className="container d-flex justify-content-center gap-5">

                <ReactPaginate className="pagination justify-content-center my-4 gap-4"
                               forcePage={pageNumber==1?0:pageNumber-1}
                               pageCount={info?.pages}
                               nextLabel="Next"
                               previousLabel="Prev"
                               nextClassName="btn btn-primary fs-5 next"
                               previousClassName="btn btn-primary fs-5 prev"
                               pageLinkClassName="page-link"
                               onPageChange={(data)=>
                               {setPageNumber(data.selected+1)
                               }}
                               activeClassName="active"
                               pageRangeDisplayed={2}
                               />

            </div>

    );
};

export default Pagination;