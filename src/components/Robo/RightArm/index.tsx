import Image from 'next/image';

import { Container } from './styles';

import elbow1 from "/public/robo/arms/right/elbow/elbow-1.png";
import elbow2 from "/public/robo/arms/right/elbow/elbow-2.png";
import elbow3 from "/public/robo/arms/right/elbow/elbow-3.png";
import elbow4 from "/public/robo/arms/right/elbow/elbow-4.png";

import wrist1 from "/public/robo/arms/right/wrist/wrist-1.png";
import wrist2 from "/public/robo/arms/right/wrist/wrist-2.png";
import wrist3 from "/public/robo/arms/right/wrist/wrist-3.png";
import wrist4 from "/public/robo/arms/right/wrist/wrist-4.png";
import wrist5 from "/public/robo/arms/right/wrist/wrist-5.png";
import wrist6 from "/public/robo/arms/right/wrist/wrist-6.png";
import wrist7 from "/public/robo/arms/right/wrist/wrist-7.png";

const images = {
  elbow: [elbow1, elbow2, elbow3, elbow4],
  wrist: [wrist1, wrist2, wrist3, wrist4, wrist5, wrist6, wrist7]
}

interface RightArmProps {
  part: string;
  position: number;
}

function RightArm ({ part, position }: RightArmProps) {
  const imageToLoad = images[part][position - 1];

  return (
    <Container>
      <Image src={imageToLoad} />
    </Container>
  );
};

export { RightArm };
