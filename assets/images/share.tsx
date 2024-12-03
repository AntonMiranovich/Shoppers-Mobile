import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function Share(props: any) {
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
            <Path fill="url(#pattern0_4_57)" d="M0 0H50V50H0z" />
            <Defs>
                <Pattern
                    id="pattern0_4_57"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#image0_4_57" transform="scale(.01563)" />
                </Pattern>
                <Image
                    id="image0_4_57"
                    width={64}
                    height={64}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    )
}

export default Share