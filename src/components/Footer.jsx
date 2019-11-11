import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 0.75rem;
  color: var(--border);
  margin: 0 auto;
  text-align: right;
  margin-right: 1rem;

  a {
    color: var(--border);
    &:hover {
      color: var(--placeholder);
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <span>
      Built by{' '}
      <a
        href="https://github.com/Arish-Shah"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arish-Shah
      </a>
    </span>
  </StyledFooter>
)

export default Footer
