import React from 'react'

import Button from '../Button'

import { StyledStepper } from './Styles'

type StepperProps = {
	children: React.ReactNode
	activeStep: number
	maxStep: number
	handleNextStep: () => void
	handleBackStep: () => void
}

const Stepper: React.FC<StepperProps> = ({
	children,
	activeStep,
	maxStep,
	handleNextStep,
	handleBackStep,
}) => {
	return (
		<StyledStepper>
			{/* * TODO Progress with step-circles  */}
			{/* <Progress activeStep={activeStep} maxStep={maxStep} /> */}
			{children}
			<div className="stepper--buttons">
				<Button onClick={handleBackStep} disabled={activeStep === 1}>
					Previous step
				</Button>
				<Button onClick={handleNextStep} disabled={activeStep === maxStep}>
					Next step
				</Button>
			</div>
		</StyledStepper>
	)
}

export default Stepper
