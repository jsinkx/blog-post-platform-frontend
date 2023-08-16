import React from 'react'

import Colors from '../../shared/colors'

import Button from '../../components/Button'
import ButtonLoginApple from '../../components/Button/Login/ButtonLoginApple'
import ButtonLoginGoogle from '../../components/Button/Login/ButtonLoginGoogle'
import Divider from '../../components/Divider'

import BlogPostPlatformWhiteIcon from '../../assets/images/blog-post-white-logo-v2.webp'

import StyledHelloPageDiv from './styles'

const HelloPage: React.FC = () => {
	return (
		<StyledHelloPageDiv>
			<section className="section__logo--left ">
				<img src={BlogPostPlatformWhiteIcon} alt="Blog Post Platform" />
			</section>
			<section className="section__actions--right">
				<h2 className="section__actions--right__title">
					Begin <br /> create cool blogs
				</h2>
				<p className="section__actions--right__paragraph"> Join today. </p>
				<ButtonLoginGoogle margin="24px 0" onClick={() => null} />
				<ButtonLoginApple margin="12px 0" onClick={() => null} />
				<Divider text="or" />
				<Button margin="12px 0" backgroundColor={Colors.blue} color={Colors.white} onClick={() => null}>
					Create account
				</Button>

				<div className="section__actions--right__already-have-account">
					<p> Have account ? </p>
					<Button
						backgroundColor="#00000000"
						color={Colors.blue}
						border={`1px solid ${Colors.blue}`}
						onClick={() => null}
					>
						Sign In
					</Button>
				</div>
			</section>
		</StyledHelloPageDiv>
	)
}

export default HelloPage
