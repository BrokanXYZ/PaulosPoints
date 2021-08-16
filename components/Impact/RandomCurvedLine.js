import React, { useContext } from "react"
import { getRandomArbitrary } from "../../utils/helpers";

import {
  MapContext
} from "react-simple-maps";

const getControlPointOffset = (offsetRatio) => {
  const isNegative = Math.random() < 0.5;
  const negativeSwitch = isNegative ? -1 : 1;
  return offsetRatio * getRandomArbitrary(0.25, 0.75) * negativeSwitch;
}

const getRandomCurvePath = (linePath) => {

  const splitLinePath = linePath.split("L");
  if(splitLinePath.length === 3) {
    let start = splitLinePath[0].substring(1).split(",");
    let controlPoint = splitLinePath[1].split(",");
    let end = splitLinePath[2].split(",");
    if(start.length === 2 && controlPoint.length === 2 && end.length === 2){
      const offsetRatio = [Math.abs(start[0]-end[0]), Math.abs(start[1]-end[1])];
      const controlPointOffset = [0, getControlPointOffset(offsetRatio[1])];
      return `M ${start[0]},${start[1]}, Q ${parseInt(controlPoint[0])+controlPointOffset[0]},${parseInt(controlPoint[1])+controlPointOffset[1]} ${end[0]},${end[1]}`;
    }
  }else if(splitLinePath.length == 2) {
    // TODO: curve these lines. Not sure why some come back with only 2 points.
  }

  return null;
}

const RandomCurvedLine = ({
  from = [0, 0],
  to = [0, 0],
  coordinates,
  stroke = "currentcolor",
  strokeWidth = 3,
  fill = "transparent",
  className = "",
  ...restProps
}) => {
  const { path } = useContext(MapContext)

  const lineData = {
    type: "LineString",
    coordinates: coordinates || [from, to],
  }
  const linePath = path(lineData);
  const curvedLinePath = getRandomCurvePath(linePath);

  return (
    <path
      // If curving the line does not work, fallback to original line path
      d={curvedLinePath ?? linePath}
      className={`rsm-line ${className}`}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      {...restProps}
    />
  )
}

export default RandomCurvedLine