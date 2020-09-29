import React from 'react';
import '../style.css';

const CurrentPage = ({ currPage, lastPage }) => (
  <>
    <h2>{`${currPage}/${lastPage}`}</h2>
  </>
);

export default CurrentPage;
