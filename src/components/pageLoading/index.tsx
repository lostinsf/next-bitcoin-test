import React from 'react';
import IsEqual from 'react-fast-compare';

interface IPageLoadingProps {
  isRouteChanging: boolean;
}

function PageLoading(props: IPageLoadingProps): JSX.Element {
  const { isRouteChanging } = props;

  return (
    <>
      <div className="pageLoading">
        {isRouteChanging ? (
          <div className="container loading">
            <div className="bar">
              <div className="spinner" />
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="bar">
              <div className="spinner" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(PageLoading, IsEqual);
