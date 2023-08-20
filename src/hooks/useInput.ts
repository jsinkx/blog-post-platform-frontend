import { useState } from 'react'

const useInput = (initalValue: string) => {
	const [value, setValue] = useState(initalValue)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return { value, onChange }
}

export default useInput
