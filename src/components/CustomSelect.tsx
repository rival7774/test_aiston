import {Select} from '@chakra-ui/react'
import type {SelectProps} from '@chakra-ui/react'

type CustomSelectProps = SelectProps & {
    options: { value: string; label: string }[]
    placeholder: string
}

export const CustomSelect = ({options, placeholder, ...props}: CustomSelectProps) => {
    return (
        <Select placeholder={placeholder} {...props}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    )
}
