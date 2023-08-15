import styled from 'styled-components'

type StyledDividerDivProps = {
	$width: string
	$color: string
}

const StyledDividerDiv = styled.div<StyledDividerDivProps>`
	width: ${({ $width }) => $width};
	display: flex;
	align-items: center;

	div {
		border-bottom: 1px solid ${({ $color }) => $color};
		width: 100%;
	}

	span {
		padding-inline: 10px;
		color: ${({ $color }) => $color};
		user-select: none;
	}
`

export default StyledDividerDiv
