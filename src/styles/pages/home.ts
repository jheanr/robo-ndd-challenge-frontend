import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const Panel = styled.div`
  padding: 1rem;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

export const HeadPanel = styled.div`
  margin-bottom: 5rem;
`;

export const ArmsPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Robo = styled.div`
  position: relative;
`;
