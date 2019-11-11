import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  fill: var(--image);
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  cursor: pointer;

  &:hover {
    fill: var(--color);
  }

  @media (max-width: 600px) {
    top: 0.675rem;
  }
`

const PlusIcon = () => (
  <SVG
    height="18pt"
    viewBox="0 0 512 512"
    width="18pt"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0" />
  </SVG>
)

export default PlusIcon
