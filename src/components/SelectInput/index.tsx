import { useCallback, useState, memo } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { ArmsPartsTypes, ArmsTypes } from '../../interfaces/Arms';
import { HeadTypes } from '../../interfaces/Head';

import {
  Container,
  Label,
  InputContainer,
  Input,
  Options,
  Option,
} from './styles';

type SelectInputProps = {
  label: string;
  options: string[];
  selectedOption: string;
  head?: HeadTypes;
  arm?: ArmsTypes;
  part?: ArmsPartsTypes;
  setHeadPosition?: (action: HeadTypes, movement: number) => void;
  setArmPosition?: (
    arm: ArmsTypes,
    part: ArmsPartsTypes,
    movement: number,
  ) => void;
};

function SelectInputComponent({
  label,
  options,
  selectedOption,
  head,
  arm,
  part,
  setHeadPosition,
  setArmPosition,
}: SelectInputProps) {
  const theme = useTheme();

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleSelectMovement = useCallback(
    (movement: number) => {
      if (head) {
        setHeadPosition(head, movement);
      } else {
        setArmPosition(arm, part, movement);
      }

      setIsOptionsOpen(false);
    },
    [arm, head, part, setHeadPosition, setArmPosition],
  );

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <Input>
          {selectedOption}
          {isOptionsOpen ? (
            <FiChevronUp size={20} color={theme.colors.gray600} />
          ) : (
            <FiChevronDown size={20} color={theme.colors.gray600} />
          )}
        </Input>
      </InputContainer>

      {isOptionsOpen && (
        <Options>
          {options.map((option, index) => {
            const movement = index + 1;

            return (
              <Option
                key={option}
                onClick={() => handleSelectMovement(movement)}
                selected={selectedOption === option}
              >
                {option}
              </Option>
            );
          })}
        </Options>
      )}
    </Container>
  );
}

export const SelectInput = memo(SelectInputComponent, (prevProps, nextProps) =>
  Object.is(prevProps.selectedOption, nextProps.selectedOption),
);
