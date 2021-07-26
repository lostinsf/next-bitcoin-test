import React from 'react';
import IsEqual from 'react-fast-compare';

function PageLoading(): JSX.Element {
  return (
    <>
      <div className="pageLoading">
        <div className="container">
          <div className="bar">
            <div className="spinner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(PageLoading, IsEqual);
