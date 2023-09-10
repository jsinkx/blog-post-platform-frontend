import React from 'react'

import { StyledStep } from './Styles'

type StepProps = {
	isActive?: boolean
	value: number
}

const Step: React.FC<StepProps> = ({ isActive = false, value }) => {
	return (
		<StyledStep $isActive={isActive}>
			<div className="caption"> {value} </div>
		</StyledStep>
	)
}

export default Step
