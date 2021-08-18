import { GetStaticProps } from 'next';

type RoboProps = {
  head: {
    inclination: string;
    inclinationPosition: number;
    rotation: string;
    rotationPosition: number;
  },
  arms: {
    left: {
      elbow: string;
      elbowPosition: number;
      wrist: string;
      wristPosition: number;
    },
    right: {
      elbow: string;
      elbowPosition: number;
      wrist: string;
      wristPosition: number;
    }
  }
}

type HomeProps = {
  robo: RoboProps;
}

export default function Home({ robo }: HomeProps) {
  console.log(robo);
  
  return (
    <h1>Hello [R.O.B.O]</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const robo = {
    head: {
      inclination: 'Em Repouso',
      inclinationPosition: 2,
      rotation: 'Em Repouso',
      rotationPosition: 3,
    },
    arms: {
      left: {
        elbow: 'Em Repouso',
        elbowPosition: 1,
        wrist: 'Em Repouso',
        wristPosition: 3,
      },
      right: {
        elbow: 'Em Repouso',
        elbowPosition: 1,
        wrist: 'Em Repouso',
        wristPosition: 3,
      }
    }
  }

  return {
    props: {
      robo
    },
    //revalidate: 60 * 60 * 24 // seconds * minutes * hours
  }
}