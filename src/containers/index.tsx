import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import IsEqual from 'react-fast-compare';

function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.replace('/company/info');
  }, []);

  return (
    <div>
      <p>Loading ...</p>
    </div>
  );
}

export default React.memo(Home, IsEqual);
