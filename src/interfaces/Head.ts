export type HeadProps = {
  inclination: string;
  inclination_position: number;
  rotation: string;
  rotation_position: number;
};

export type HeadTypes = 'inclination' | 'rotation';

export type HeadPositionProps = {
  action: HeadTypes;
  position: number;
};
