import React from 'react';
import { ColorValue } from 'react-native/types';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  pathFill?: ColorValue;
}