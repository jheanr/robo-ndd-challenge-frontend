import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { Head } from '../components/Robo/Head';
import { LeftArm } from '../components/Robo/LeftArm';
import { RightArm } from '../components/Robo/RightArm';
import { SelectInput } from '../components/SelectInput';

import {
  ArmProps,
  ArmsPartsTypes,
  ArmsPositionProps,
  ArmsProps,
  ArmsTypes,
} from '../interfaces/Arms';
import { HeadPositionProps, HeadProps, HeadTypes } from '../interfaces/Head';

import { api } from '../services/api';

import {
  ArmsPanel,
  Container,
  ControlPanel,
  ErrorMessage,
  HeadPanel,
  Panel,
  Robo,
  Subtitle,
  Title,
} from '../styles/pages/home';

type MovementsProps = {
  head: {
    inclination: string[];
    rotation: string[];
  };
  arm: {
    elbow: string[];
    wrist: string[];
  };
};

type RoboProps = {
  head: HeadProps;
  arms: ArmsProps;
};

type HomeProps = {
  robo: RoboProps;
  movements: MovementsProps;
};

export default function Home({ robo, movements }: HomeProps) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [roboHead, setRoboHead] = useState<HeadProps>(robo.head);
  const [roboLeftArm, setRoboLeftArm] = useState<ArmProps>(robo.arms.left);
  const [roboRightArm, setRoboRightArm] = useState<ArmProps>(robo.arms.right);

  const [headPosition, setHeadPosition] = useState<HeadPositionProps>({
    action: 'inclination',
    position: roboHead.inclination_position,
  });

  const [leftArmPosition, setLeftArmPosition] = useState<ArmsPositionProps>({
    part: 'elbow',
    position: roboLeftArm.elbow_position,
  });

  const [rightArmPosition, setRightArmPosition] = useState<ArmsPositionProps>({
    part: 'elbow',
    position: roboRightArm.elbow_position,
  });

  const handleError = useCallback((message?: string) => {
    setShowError(true);

    setErrorMessage(message);

    setTimeout(() => {
      setShowError(false);
    }, 4000);
  }, []);

  const handleHeadPosition = useCallback(
    async (action: HeadTypes, movement: number) => {
      try {
        const response = await api.patch('/head', {
          action,
          movement,
        });

        setRoboHead(response.data);
        setHeadPosition({ action, position: movement });
      } catch (error) {
        handleError(error.response.data.message);
      }
    },
    [handleError],
  );

  const handleArmsPosition = useCallback(
    async (arm: ArmsTypes, part: ArmsPartsTypes, movement: number) => {
      try {
        const response = await api.patch('/arms', {
          arm,
          part,
          movement,
        });

        if (arm === 'left') {
          setRoboLeftArm(response.data);
          setLeftArmPosition({ part, position: movement });
        } else {
          setRoboRightArm(response.data);
          setRightArmPosition({ part, position: movement });
        }
      } catch (error) {
        handleError(error.response.data.message);
      }
    },
    [handleError],
  );

  return (
    <Container>
      <Title>Bem-vindo ao [R.O.B.O]</Title>
      {showError ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <Subtitle>Selecione um movimento para eu realizar.</Subtitle>
      )}

      <ControlPanel>
        <Panel>
          <HeadPanel>
            <SelectInput
              label="Inclinação"
              options={movements.head.inclination}
              selectedOption={roboHead.inclination}
              head="inclination"
              setHeadPosition={handleHeadPosition}
            />
          </HeadPanel>

          <ArmsPanel>
            <SelectInput
              label="Cotovelo D."
              options={movements.arm.elbow}
              selectedOption={roboRightArm.elbow}
              arm="right"
              part="elbow"
              setArmPosition={handleArmsPosition}
            />

            <SelectInput
              label="Pulso D."
              options={movements.arm.wrist}
              selectedOption={roboRightArm.wrist}
              arm="right"
              part="wrist"
              setArmPosition={handleArmsPosition}
            />
          </ArmsPanel>
        </Panel>

        <Robo>
          <Head
            action={headPosition.action}
            position={headPosition.position}
            error={showError}
          />

          <LeftArm
            part={leftArmPosition.part}
            position={leftArmPosition.position}
          />

          <RightArm
            part={rightArmPosition.part}
            position={rightArmPosition.position}
          />

          <Image src="/robo/robo.png" width={202} height={372} />
        </Robo>

        <Panel>
          <HeadPanel>
            <SelectInput
              label="Rotação"
              options={movements.head.rotation}
              selectedOption={roboHead.rotation}
              head="rotation"
              setHeadPosition={handleHeadPosition}
            />
          </HeadPanel>

          <ArmsPanel>
            <SelectInput
              label="Cotovelo E."
              options={movements.arm.elbow}
              selectedOption={roboLeftArm.elbow}
              arm="left"
              part="elbow"
              setArmPosition={handleArmsPosition}
            />

            <SelectInput
              label="Pulso E."
              options={movements.arm.wrist}
              selectedOption={roboLeftArm.wrist}
              arm="left"
              part="wrist"
              setArmPosition={handleArmsPosition}
            />
          </ArmsPanel>
        </Panel>
      </ControlPanel>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const headResponse = await api.get('/head');
  const armsResponse = await api.get('/arms');
  const movementsResponse = await api.get('/movements.json');

  const robo = {
    head: headResponse.data,
    arms: armsResponse.data,
  };

  return {
    props: {
      robo,
      movements: movementsResponse.data,
    },
    revalidate: 60 * 60 * 24, // seconds * minutes * hours
  };
};
