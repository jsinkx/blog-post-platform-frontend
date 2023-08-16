import styled from 'styled-components'

const SECTION_MEDIA_MAX_WIDTH = '800px'

const StyledHelloPageDiv = styled.div`
	display: flex;
	width: 100%;

	section {
		width: 50%;
		user-select: none;
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

		@media (max-width: ${SECTION_MEDIA_MAX_WIDTH}) {
			display: none;
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

		@media (max-width: ${SECTION_MEDIA_MAX_WIDTH}) {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin: 0 auto;
		}
	}
`

export default StyledHelloPageDiv
