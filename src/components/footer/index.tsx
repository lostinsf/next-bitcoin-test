import React from 'react';
import isEqual from 'react-fast-compare';
import { FooterWrapper, FooterInner } from './styles';

interface FooterProps {
  title: string;
}

function Footer(props: FooterProps): JSX.Element {
  const { title } = props;

  return (
    <FooterWrapper>
      <FooterInner>
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
      </FooterInner>
    </FooterWrapper>
  );
}

export default React.memo(Footer, isEqual);
