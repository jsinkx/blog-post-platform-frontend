import React from 'react'

import Colors from '../../shared/colors'

import createContainer from '../../utils/create-container'

import IconButton from '../Button/IconButton'
import CrossIcon from '../Icons/CrossIcon'
import Portal from '../Portal'

import StyledModalOverlay from './styles'

type ModalWindowProps = {
	title?: string
	backgroundColor?: string
	children: React.ReactNode
	onClose: () => void
}

const MODAL_CONTAINER_ID = 'react-modal-with-portal'

const ModalWindow: React.FC<ModalWindowProps> = ({
	title,
	backgroundColor = Colors.black,
	children,
	onClose,
}) => {
	const rootRef = React.useRef<HTMLDivElement>(null)

	const [isMounted, setIsMounted] = React.useState(false)

	React.useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID })
		setIsMounted(true)

		// Close modal
		const handleOutsideClick = ({ target }: MouseEvent) => {
			if (target instanceof Node && rootRef.current === target) {
				onClose()
			}
		}

		const handleEscapeClick = ({ key }: KeyboardEvent) => {
			if (key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('click', handleOutsideClick)
		window.addEventListener('keydown', handleEscapeClick)

		// Disable the use, display of scrolling and user select
		document.body.style.overflow = 'hidden'
		document.body.style.userSelect = 'none'

		return () => {
			// Cancel all changes on unmount
			window.removeEventListener('click', handleOutsideClick)
			window.removeEventListener('keydown', handleEscapeClick)

			document.body.style.overflow = 'unset'
			document.body.style.userSelect = 'text'
		}
	}, [onClose])

	return isMounted ? (
		<Portal id={MODAL_CONTAINER_ID}>
			<StyledModalOverlay $ModalWindowBackgroundColor={backgroundColor} ref={rootRef}>
				<div className="modal-window">
					<header>
						<IconButton onClick={() => null}>
							<CrossIcon color={Colors.white} />
						</IconButton>
						{title && <h2> {title} </h2>}
					</header>
					{children}
				</div>
			</StyledModalOverlay>
		</Portal>
	) : null
}

export default ModalWindow
