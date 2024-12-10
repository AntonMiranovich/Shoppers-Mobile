import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function DeleteImg(props: any) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M5 5l14 14M5 19L19 5'
				stroke='#212029'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	)
}

export default DeleteImg
