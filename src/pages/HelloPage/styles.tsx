import styled from 'styled-components'

const StyledHelloPageDiv = styled.div`
	display: flex;
	width: 100%;

	section {
		width: 50%;
	}

	.section__logo--left {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;

		img {
			margin-top: 20%;
			height: 350px;
			user-select: none;
			pointer-events: none;
		}
	}
	.section__actions--right {
		.section__actions--right__title {
			margin: 0;
			margin-top: 80px;
			font-size: 3.7em;
			font-weight: bold;
		}

		.section__actions--right__paragraph {
			margin: 30px 0;
			font-size: 2.6em;
			font-weight: bold;
		}

		.section__actions--right__already-have-account {
			margin-top: 50px;

			p {
				font-size: 1.2em;
				font-weight: bold;
			}
		}
	}
`

export default StyledHelloPageDiv
