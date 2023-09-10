import React from 'react'

import Step from './Step'
import { StyledProgressContainer } from './Styles'

type ProgressProps = {
	activeStep: number
	maxStep: number
}

const Progress: React.FC<ProgressProps> = ({ activeStep, maxStep }) => {
	const width = `${((activeStep - 1) / (maxStep - 1)) * 100}%`

	return (
		<StyledProgressContainer $width={width}>
			<div className="progress" />
			{[...Array(maxStep).keys()].map((value) => (
				<Step key={value + 1} value={value + 1} isActive={value + 1 === activeStep} />
			))}
		</StyledProgressContainer>
	)
}

export default Progress
