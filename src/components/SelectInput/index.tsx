import { useCallback } from 'react';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { 
  Container,
  Label,
  InputContainer,
  Input,
  Options,
  Option,
} from './styles';

interface SelectInputProps {
  label: string;
  options: string[];
  selectedOption: string;
  head?: 'inclination' | 'rotation';
  arm?: 'left' | 'right';
  part?: 'elbow' | 'wrist';
  setHeadPosition?: (action: string, movement: number) => void;
  setArmPosition?: (arm: string, part: string, movement: number) => void;
}

function SelectInput({ label, options, selectedOption, head, arm, part, setHeadPosition, setArmPosition }: SelectInputProps) {
  const theme = useTheme();

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleSelectMovement = useCallback((movement: number) => {
    if (head) {
      setHeadPosition(head, movement);
    } else {
      setArmPosition(arm, part, movement);
    }

    setIsOptionsOpen(false);
  }, []);

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <Input>
          {selectedOption} 
          {
            isOptionsOpen 
            ? <FiChevronUp size={20} color={theme.colors.gray600} /> 
            : <FiChevronDown size={20} color={theme.colors.gray600} /> 
          }
        </Input>
      </InputContainer>

      {isOptionsOpen && (
        <Options>
          {options.map((option, index) => {
            const movement = index + 1;

            return (
              <Option
                key={index}
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
};

export { SelectInput };
