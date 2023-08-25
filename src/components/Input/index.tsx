import React, { HTMLAttributes } from 'react'

import StyledInput from './styles'

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
		return (
			<StyledInput
				style={style}
				className={className}
				$height={height}
				$width={width}
				type={type}
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
		)
	},
)

export default Input
