import * as React from "react"
import Svg, { Circle, Path, Defs, Pattern, Use, Image } from "react-native-svg"

function ImgBack(props:any) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Circle cx={25} cy={25} r={25} fill="#F9EF05" />
      <Path fill="url(#pattern0_0_1)" d="M5 5H45V45H5z" />
      <Defs>
        <Pattern
          id="pattern0_0_1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_0_1" transform="scale(.02)" />
        </Pattern>
        <Image
          id="image0_0_1"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAmUlEQVRoge3WOwrCQBRG4YMbmCzBrbsGS+1sfGDlAlxKLMLtBCEjucPlfJA2/AeGYUCSJEnaUAOOwCF7SI8G3IAZeCRvWa0BV5aIN7DPnbNOmYg4TkZkmjBiDBNwx4h8ZSKeLBGZ3+XX0F1/6ybmf/ykxNEKJa7dYMyoSryzQonnezBmVOVi4gJ4JW/p1oATcM4eIkmSJH31AQ6pXcqlTtSjAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default ImgBack
