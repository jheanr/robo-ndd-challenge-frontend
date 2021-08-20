import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 10.6rem;
  left: 1rem;

  @media (max-width: 425px) {
    top: 12rem;
    right: 2.5rem;
  }
`;
