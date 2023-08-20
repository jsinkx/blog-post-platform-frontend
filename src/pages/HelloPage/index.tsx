import React from 'react'

import FormAuthContext, { FormAuthNames } from '../../context/form-auth-context'

import Colors from '../../shared/colors'

import Button from '../../components/Button'
import ButtonLoginApple from '../../components/Button/Login/ButtonLoginApple'
import ButtonLoginGoogle from '../../components/Button/Login/ButtonLoginGoogle'
import Divider from '../../components/Divider'
import FormAuth from '../../components/Form/Auth'
import ModalWindow from '../../components/ModalWindow'

import BlogPostPlatformWhiteIcon from '../../assets/images/blog-post-white-logo-v2.webp'

import StyledHelloPageDiv from './styles'

const HelloPage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(true)
	const [currentForm, setCurrentForm] = React.useState(FormAuthNames.LOGIN)

	const formAuthContextValue = React.useMemo(
		() => ({
			currentForm,
			setCurrentForm,
		}),
		[currentForm],
	)

	const handleOpenModal = (type: FormAuthNames) => {
		setIsOpen(true)
		setCurrentForm(type)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<StyledHelloPageDiv>
			{isOpen && (
				<ModalWindow onClose={handleCloseModal}>
					<FormAuthContext.Provider value={formAuthContextValue}>
						<FormAuth />
					</FormAuthContext.Provider>
				</ModalWindow>
			)}
			<section className="section__logo--left ">
				<img src={BlogPostPlatformWhiteIcon} alt="Blog Post Platform" />
			</section>
			<section className="section__actions--right">
				<h2 className="section__actions--right__title">
					Begin <br /> create cool blogs
				</h2>
				<p className="section__actions--right__paragraph"> Join today. </p>
				<ButtonLoginGoogle margin="24px 0" onClick={() => handleOpenModal(FormAuthNames.LOGIN_GOOGLE)} />
				<ButtonLoginApple margin="12px 0" onClick={() => handleOpenModal(FormAuthNames.LOGIN_APPLE)} />
				<Divider text="or" />
				<Button
					margin="12px 0"
					backgroundColor={Colors.blue}
					color={Colors.white}
					onClick={() => handleOpenModal(FormAuthNames.REGISTER)}
				>
					Create account
				</Button>

				<div className="section__actions--right__already-have-account">
					<p> Have account ? </p>
					<Button
						backgroundColor="#00000000"
						color={Colors.blue}
						border={`1px solid ${Colors.blue}`}
						onClick={() => handleOpenModal(FormAuthNames.LOGIN)}
					>
						Sign In
					</Button>
				</div>
			</section>
		</StyledHelloPageDiv>
	)
}

export default HelloPage
