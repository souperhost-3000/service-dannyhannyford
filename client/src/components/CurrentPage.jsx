import React from 'react';
import '../style.css';

const CurrentPage = ({ currPage, lastPage }) => (
  <>
    <div className="page">{`${currPage} / ${lastPage}`}</div>
  </>
);

export default CurrentPage;
