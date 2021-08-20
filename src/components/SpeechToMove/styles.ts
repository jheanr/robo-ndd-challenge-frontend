import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;

  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    background: ${({ theme }) => theme.colors.gray200};
    border-radius: 0.5rem;
    padding-left: 0.5rem;

    right: 1rem;
    left: 1rem;
    bottom: 1rem;

    justify-content: space-between;
  }
`;

export const SpeechInfo = styled.p`
  font-size: 0.875rem;
  margin-right: 0.5rem;
`;

export const IconContainer = styled.button`
  background: ${({ theme }) => theme.colors.title};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 2.5rem;
  outline: none;
  padding: 0.25rem;
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
