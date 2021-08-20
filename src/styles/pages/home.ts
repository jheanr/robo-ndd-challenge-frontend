import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const ErrorMessage = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.error};
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Robo = styled.div`
  position: relative;

  @media (max-width: 425px) {
    order: 1;
  }
`;

export const Panel = styled.div`
  padding: 1rem;
  width: 220px;

  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    order: 2;
  }
`;

export const HeadPanel = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 425px) {
    margin-bottom: 1rem;
  }
`;

export const ArmsPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
