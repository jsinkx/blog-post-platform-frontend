import styled from 'styled-components'

type StyledModalOverlayProps = {
	$ModalWindowBackgroundColor: string
}

const MODAL_OVERLAY_MEDIA_MAX_HEIGHT = '350px'
const MODAL_WINDOW_MEDIA_MAX_WIDTH = '800px'

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
	overflow: auto;

	.modal-window {
		width: 50vw;
		margin-top: 19vh;
		margin-inline: auto;
		padding: 2vw;
		padding-top: 0.1vw;
		padding-bottom: 1.8vw;
		text-align: center;
		border-radius: 18px;
		background-color: ${({ $ModalWindowBackgroundColor }) => $ModalWindowBackgroundColor};
		user-select: text;
		box-sizing: border-box;
		overflow: auto;

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

		@media (max-width: ${MODAL_WINDOW_MEDIA_MAX_WIDTH}) {
			width: 100%;
			margin: 0;
			margin-top: 10%;
			padding-bottom: 3vh;
		}

		@media (max-height: ${MODAL_OVERLAY_MEDIA_MAX_HEIGHT}) {
			margin-top: 4vh;
		}
	}
`

export default StyledModalOverlay
