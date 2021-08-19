import Image from 'next/image';

import { Container } from './styles';

import headInclination1 from "/public/robo/head/inclination/head-1.png";
import headInclination2 from "/public/robo/head/inclination/head-2.png";
import headInclination3 from "/public//robo/head/inclination/head-3.png";

import headRotation1 from "/public/robo/head/rotation/head-1.png";
import headRotation2 from "/public/robo/head/rotation/head-2.png";
import headRotation3 from "/public/robo/head/rotation/head-3.png";
import headRotation4 from "/public/robo/head/rotation/head-4.png";
import headRotation5 from "/public/robo/head/rotation/head-5.png";

import headError from "/public/robo/head/head-error.png";

const images = {
  inclination: [headInclination1, headInclination2, headInclination3],
  rotation: [headRotation1, headRotation2, headRotation3, headRotation4, headRotation5]
}

interface HeadProps {
  action: string;
  position: number;
  error: boolean;
}

function Head ({ action, position, error }: HeadProps) {
  const imageToLoad = images[action][position - 1];

  return (
    <Container>
      {error ? <Image src={headError} /> : <Image src={imageToLoad} />}
    </Container>
  );
};

export { Head };
