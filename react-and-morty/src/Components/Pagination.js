import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useCharacters} from "../api/useData";
import InfiniteScroll from 'react-infinite-scroller';

const Pagination = ({pageNumber,info,setPageNumber}) => {


    return (

            <div className="">


                <ReactPaginate className=""
                               forcePage={pageNumber==1?0:pageNumber-1}
                               pageCount={info?.pages}
                               nextLabel="Next"
                               previousLabel="Prev"
                               nextClassName=""
                               previousClassName=""
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