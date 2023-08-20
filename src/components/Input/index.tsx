import React from 'react'

import StyledInput from './styles'

type InputProps = {
	className?: string
	style?: React.CSSProperties
	height?: string
	width?: string
	type?: React.HTMLInputTypeAttribute
	name: string
	placeholder: string
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	required?: boolean
	disabled?: boolean
	readOnly?: boolean
	autoComplete?: 'on' | 'off'
}

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
			required,
			disabled,
			readOnly,
			autoComplete = 'on',
		},
		ref,
	) => (
		<StyledInput
			ref={ref}
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
			required={required}
			autoComplete={autoComplete}
		/>
	),
)

export default Input
