import React from "react";
import Svg, { Path } from 'react-native-svg';
import { IconProps } from "@global/lib/types";
import { COLORS } from "@global/theme";

export const SplitIcon: React.FC<IconProps> = ({ size = 25, pathFill=COLORS.iconGray, ...rest }) => {
  return (
    //@ts-ignore
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <Path
        //@ts-ignore
        fill={pathFill}
        fillRule="evenodd"
        d="M6 4a3 3 0 00-3 3v10a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H6zM5 7a1 1 0 011-1h5v12H6a1 1 0 01-1-1V7zm8 11h5a1 1 0 001-1V7a1 1 0 00-1-1h-5v12z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}
