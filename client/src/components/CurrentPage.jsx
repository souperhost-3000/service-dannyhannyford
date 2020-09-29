import React from 'react';

const CurrentPage = ({currPage, lastPage}) => (
  <>
    <h2>{`${currPage}/${lastPage}`}</h2>
  </>
);

export default CurrentPage;
