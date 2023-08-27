import React, { HTMLAttributes } from 'react'

import Colors from '../../shared/colors'

import EyeCloseIcon from '../Icons/EyeCloseIcon'
import EyeOpenIcon from '../Icons/EyeOpenIcon'

import StyledInputWrapper, { StyledIconButton } from './styles'

type InputProps = {
	className?: string
	style?: React.CSSProperties
	height?: string
	width?: string
	type?: React.HTMLInputTypeAttribute
	name?: string
	placeholder: string
	value?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	disabled?: boolean
	readOnly?: boolean
	autoComplete?: 'on' | 'off'
} & HTMLAttributes<HTMLInputElement>

const EYE_ICON_SIZE = '30px'
const EYE_ICON_COLOR = Colors.white

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			style,
			height = '60px',
			width = '300px',
			type = 'text',
			name,
			placeholder,
			value,
			onChange,
			disabled,
			readOnly,
			autoComplete = 'on',
			...props
		},
		ref,
	) => {
		const [isShowPassword, setIsShowPassword] = React.useState(false)

		const SwitchEyeIcon = isShowPassword ? (
			<EyeCloseIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
		) : (
			<EyeOpenIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
		)

		return (
			<StyledInputWrapper $inputHeight={height} $inputWidth={width} style={style} className={className}>
				{/* 
					isShowPassword by default is false. 
					Switch this flag can be only by button, which render if input type is password.
				*/}
				<input
					type={!isShowPassword ? type : 'text'}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					disabled={disabled}
					readOnly={readOnly}
					autoComplete={autoComplete}
					ref={ref}
					{...props}
				/>
				{type === 'password' ? (
					<StyledIconButton size={EYE_ICON_SIZE} onClick={() => setIsShowPassword((p) => !p)}>
						{SwitchEyeIcon}
					</StyledIconButton>
				) : null}
			</StyledInputWrapper>
		)
	},
)

export default Input
