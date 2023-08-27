import styled from 'styled-components'

import Colors from '../../shared/colors'

type StyledErrorProps = {
	$width: string
}

const StyledError = styled.div<StyledErrorProps>`
	width: ${({ $width }) => $width};
	padding: 5px 15px 5px 10px;
	text-align: left;
	color: ${Colors.red};
	border: 1px solid ${Colors.red};
	border-radius: 5px;
	background-color: transparent;
	box-sizing: border-box;
	user-select: none;
	overflow-y: wrap;
`

export default StyledError
