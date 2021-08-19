import { Select } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { useCallback, useState } from 'react';
import { 
  FiArrowUp, FiArrowDown, FiChevronLeft, FiChevronsLeft, FiChevronRight, 
  FiChevronsRight, FiGitCommit, FiArrowDownLeft, FiCornerDownLeft, FiCornerLeftUp,
  FiArrowDownRight, FiCornerDownRight, FiCornerRightUp, FiRotateCw, FiRotateCcw
} from 'react-icons/fi';

import { api } from '../services/api';

import { Container, Subtitle, Title } from '../styles/pages/home';

type HeadProps = {
  inclination: string;
  inclinationPosition: number;
  rotation: string;
  rotationPosition: number;
}

type ArmProps = {
  elbow: string;
  elbowPosition: number;
  wrist: string;
  wristPosition: number;
}

type RoboArmsProps = {
  left: ArmProps;
  right: ArmProps;
}

type RoboProps = {
  head: HeadProps,
  arms: RoboArmsProps;
}

type HomeProps = {
  robo: RoboProps;
}

export default function Home({ robo }: HomeProps) {
  const [roboHead, setRoboHead] = useState<HeadProps>(robo.head);
  const [roboLeftArm, setRoboLeftArm] = useState<ArmProps>(robo.arms.left);
  const [roboRightArm, setRoboRightArm] = useState<ArmProps>(robo.arms.right);

  const handleHeadInclination = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/head', {
        action: 'inclination',
        movement
      });

      setRoboHead(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  const handleHeadRotation = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/head', {
        action: 'rotation',
        movement
      });

      setRoboHead(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  const handleLeftElbow = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/arms', {
        arm: 'left',
        part: 'elbow',
        movement
      });

      setRoboLeftArm(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  const handleLeftWrist = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/arms', {
        arm: 'left',
        part: 'wrist',
        movement
      });

      setRoboLeftArm(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  const handleRightElbow = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/arms', {
        arm: 'right',
        part: 'elbow',
        movement
      });

      setRoboRightArm(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  const handleRightWrist = useCallback(async (movement: number) =>  {
    try {
      const response = await api.patch('/arms', {
        arm: 'right',
        part: 'wrist',
        movement
      });

      setRoboRightArm(response.data);
    } catch (error) {
      alert(`${error.response.status} - ${error.response.data.message}`);
    }
  }, []);

  return (
    <Container>
      <Title>Bem-vindo ao [R.O.B.O]</Title>
      <Subtitle>Para que eu posso executar algum movimento, preciso que você clique em alguma das opções abaixo.</Subtitle>

      <br/>

      <ul>
        <li>Head
          <ul>
            <li>Inclinação: {roboHead.inclination}</li>
            <li>Rotação: {roboHead.rotation}</li>
          </ul>
        </li>
      </ul>

      <br/>

      <ul>
        <li>Esquerdo
          <ul>
            <li>Cotovelo: {roboLeftArm.elbow}</li>
            <li>Punho: {roboLeftArm.wrist}</li>
            <li></li>
          </ul>
        </li>
        <li>Direito
          <ul>
          <li>Cotovelo: {roboRightArm.elbow}</li>
            <li>Punho: {roboRightArm.wrist}</li>
          </ul>
        </li>
      </ul>

      <br/>

      <h3>Head</h3>

      <button onClick={() => handleHeadInclination(1)}>
        <FiArrowUp size={24} />
      </button>

      <button onClick={() => handleHeadInclination(2)}>
        <FiGitCommit size={24} />
      </button>

      <button onClick={() => handleHeadInclination(3)}>
        <FiArrowDown size={24} />
      </button>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => handleHeadRotation(1)}>
          <FiRotateCcw size={24} /> -90°
        </button>

        <button onClick={() => handleHeadRotation(2)}>
          <FiRotateCcw size={24} /> -45°
        </button>

        <button onClick={() => handleHeadRotation(3)}>
          <FiGitCommit size={24} />
        </button>

        <button onClick={() => handleHeadRotation(4)}>
          <FiRotateCw size={24} /> 45°
        </button>
        
        <button onClick={() => handleHeadRotation(5)}>
          <FiRotateCw size={24} /> 90°
        </button>
      </div>

      <h3>Cotovelo Esquerdo</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => handleLeftElbow(1)}>
          <FiGitCommit size={24} />
        </button>

        <button onClick={() => handleLeftElbow(2)}>
          <FiArrowDownLeft size={24} />
        </button>

        <button onClick={() => handleLeftElbow(3)}>
          <FiCornerDownLeft size={24} />
        </button>

        <button onClick={() => handleLeftElbow(4)}>
          <FiCornerLeftUp size={24} />
        </button>
      </div>

      <h3>Pulso Esquerdo</h3>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => handleLeftWrist(1)}>
          <FiRotateCcw size={24} /> -90°
        </button>

        <button onClick={() => handleLeftWrist(2)}>
        <FiRotateCcw size={24} /> -45°
        </button>

        <button onClick={() => handleLeftWrist(3)}>
          <FiGitCommit size={24} />
        </button>

        <button onClick={() => handleLeftWrist(4)}>
          <FiRotateCw size={24} /> 45°
        </button>

        <button onClick={() => handleLeftWrist(5)}>
          <FiRotateCw size={24} /> 90°
        </button>

        <button onClick={() => handleLeftWrist(6)}>
          <FiRotateCw size={24} /> 135°
        </button>

        <button onClick={() => handleLeftWrist(7)}>
          <FiRotateCw size={24} /> 180°
        </button>
      </div>

      <br/>

      <h3>Cotovelo Direito</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => handleRightElbow(1)}>
          <FiGitCommit size={24} />
        </button>

        <button onClick={() => handleRightElbow(2)}>
          <FiArrowDownLeft size={24} />
        </button>

        <button onClick={() => handleRightElbow(3)}>
          <FiCornerDownLeft size={24} />
        </button>

        <button onClick={() => handleRightElbow(4)}>
          <FiCornerLeftUp size={24} />
        </button>
      </div>

      <h3>Pulso Direito</h3>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <button onClick={() => handleRightWrist(1)}>
          <FiRotateCcw size={24} /> -90°
        </button>

        <button onClick={() => handleRightWrist(2)}>
        <FiRotateCcw size={24} /> -45°
        </button>

        <button onClick={() => handleRightWrist(3)}>
          <FiGitCommit size={24} />
        </button>

        <button onClick={() => handleRightWrist(4)}>
          <FiRotateCw size={24} /> 45°
        </button>

        <button onClick={() => handleRightWrist(5)}>
          <FiRotateCw size={24} /> 90°
        </button>

        <button onClick={() => handleRightWrist(6)}>
          <FiRotateCw size={24} /> 135°
        </button>

        <button onClick={() => handleRightWrist(7)}>
          <FiRotateCw size={24} /> 180°
        </button>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const headResponse = await api.get('/head');
  const armsResponse = await api.get('/arms');

  const robo = {
    head: headResponse.data,
    arms: armsResponse.data
  }

  return {
    props: {
      robo
    },
    revalidate: 60 * 60 * 24 // seconds * minutes * hours
  }
}