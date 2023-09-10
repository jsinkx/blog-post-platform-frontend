import styled from 'styled-components'

import Colors from '../../shared/colors'

type StyledProgressContainerProps = {
	$width: string
}

type StyledStepProps = {
	$isActive: boolean
}

export const StyledProgressContainer = styled.div<StyledProgressContainerProps>`
	display: flex;
	justify-content: space-between;
	position: relative;
	margin-bottom: 60px;
	max-width: 100%;
	width: 350px;

	::before {
		content: '';
		background-color: ${Colors.grey};
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
	}

	.progress {
		background-color: ${Colors.blue};
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transition: 0.4s ease;
	}
`

export const StyledStep = styled.div<StyledStepProps>`
	background: ${Colors.grey};
	color: ${Colors.grey};
	border-radius: 50%;
	height: 10px;
	width: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 3px solid ${Colors.grey};
	transition: 0.4s ease;

	.caption {
		position: absolute;
		font-size: 14px;
		font-weight: bolder;
		bottom: -30px;
	}

	${({ $isActive }) =>
		$isActive &&
		`
    border-color: ${Colors.blue};
  background-color: #fff;
  color: ${Colors.blue};
  scale: 1.1;
    `}
`

export const StyledStepper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.stepper--buttons {
		display: flex;
	}
`
