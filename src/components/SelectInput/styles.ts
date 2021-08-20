import styled, { css } from 'styled-components';

type OptionProps = {
  selected: boolean;
};

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  cursor: pointer;
  min-width: 100px;
`;

export const Input = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 0.25rem;
  list-style: none;

  position: absolute;
  z-index: 100;
  top: 4rem;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
`;

export const Option = styled.li<OptionProps>`
  color: ${({ theme }) => theme.colors.gray500};
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.75rem;

  ${({ selected }) =>
    selected &&
    css`
      font-weight: 700;
    `}

  transition: background .2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }

  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
  }
`;
