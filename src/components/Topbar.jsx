import React from 'react';
import styled from 'styled-components';

import keep from '../assets/keep.png';
import react from '../assets/react.png';
import firebase from '../assets/firebase.png';

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.25rem 0 3rem 0;

  .keep img {
    height: 3rem;
    width: 3rem;
  }

  .react img {
    height: 2.85rem;
    width: 2.85rem;
  }

  .firebase img {
    height: 2.65rem;
  }

  .plus {
    padding: 0 0.9rem;
  }
`;

const Topbar = () => (
  <StyledTopbar>
    <span className="keep">
      <img src={keep} alt="Google Keep" />
    </span>
    <span className="plus">+</span>
    <span className="react">
      <img src={react} alt="React" />
    </span>
    <span className="plus">+</span>
    <span className="firebase">
      <img src={firebase} alt="Firebase" />
    </span>
  </StyledTopbar>
);

export default Topbar;
