export type ArmProps = {
  elbow: string;
  elbow_position: number;
  wrist: string;
  wrist_position: number;
};

export type ArmsProps = {
  left: ArmProps;
  right: ArmProps;
};

export type ArmsTypes = 'left' | 'right';

export type ArmsPartsTypes = 'elbow' | 'wrist';

export type ArmsPositionProps = {
  part: ArmsPartsTypes;
  position: number;
};
