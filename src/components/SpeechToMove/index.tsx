import { FiMic } from 'react-icons/fi';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useTheme } from 'styled-components';

import { ArmsPartsTypes, ArmsTypes } from '../../interfaces/Arms';
import { HeadTypes } from '../../interfaces/Head';

import { roboCommands } from './commands';

import { Container, IconContainer, SpeechInfo } from './styles';

type SpeechToMoveProps = {
  setHeadPosition: (action: HeadTypes, movement: number) => void;
  setArmPosition: (
    arm: ArmsTypes,
    part: ArmsPartsTypes,
    movement: number,
  ) => void;
};

const appId = '76c91e6d-6f00-439c-92f3-d2de5d48bf24';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function SpeechToMove({ setHeadPosition, setArmPosition }: SpeechToMoveProps) {
  const theme = useTheme();

  const commands = roboCommands.map(command => ({
    command: command.commands,
    callback: () =>
      command.head
        ? setHeadPosition(command.action as HeadTypes, command.movement)
        : setArmPosition(
            command.arm as ArmsTypes,
            command.part as ArmsPartsTypes,
            command.movement,
          ),
  }));

  const { transcript, listening } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Container>
      <SpeechInfo>
        {!listening
          ? 'Somente comandos em inglês'
          : `Você disse: ${transcript}`}
      </SpeechInfo>

      <IconContainer
        onClick={() =>
          !listening
            ? SpeechRecognition.startListening()
            : SpeechRecognition.stopListening()
        }
        type="button"
      >
        <FiMic
          size={24}
          color={!listening ? theme.colors.white : theme.colors.hightlight}
        />
      </IconContainer>
    </Container>
  );
}

export { SpeechToMove };
