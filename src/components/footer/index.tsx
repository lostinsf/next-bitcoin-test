import React from 'react';
import isEqual from 'react-fast-compare';

interface FooterProps {
  title: string;
}

function Footer(props: FooterProps): JSX.Element {
  const { title } = props;

  return (
    <footer>
      <div className="footerInner">
        <p className="mb-0">
          Copyright © {new Date().getFullYear()}{' '}
          <a href="https://pekr.pe.kr" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          {' | '}
          <a href="https://pekr.pe.kr" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer, isEqual);
