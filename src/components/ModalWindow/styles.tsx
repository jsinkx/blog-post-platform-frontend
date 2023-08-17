import styled from 'styled-components'

type StyledModalOverlayProps = {
	$ModalWindowBackgroundColor: string
}

const StyledModalOverlay = styled.div<StyledModalOverlayProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	place-items: center;
	background-color: #242d342d;
	backdrop-filter: blur(2px);
	z-index: 999999;

	@media (max-height: 350px) {
		overflow-y: scroll;
	}

	.modal-window {
		width: 50vw;
		margin: 25vh auto;
		padding: 2vw;
		padding-top: 0.1vw;
		padding-bottom: 1.8vw;
		text-align: center;
		border-radius: 18px;
		background-color: ${({ $ModalWindowBackgroundColor }) => $ModalWindowBackgroundColor};
		user-select: text;

		header {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 15px auto;
			user-select: none;

			h2 {
				margin: 0;
				margin-left: 25px;
				text-align: left;
				font-size: 1.2em;
			}
		}

		@media (max-height: 350px) {
			margin-top: 5vh;
		}
	}
`

export default StyledModalOverlay
