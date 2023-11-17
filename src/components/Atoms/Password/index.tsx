import { Input, FormControl, FormLabel } from '@chakra-ui/react'

interface AtomInputProps {
  placeholder: string
  label: string
  name: string
  value: string
  setState: (value) => void
}

export default function AtomPassword({
  placeholder,
  label,
  name,
  value,
  setState
} : AtomInputProps) {

  return (
    <FormControl py={3}>
      <FormLabel htmlFor={name}>
          {label}
      </FormLabel>
      
      <Input 
        name={name} 
        value={value}
        onChange={event => setState(event.target.value)}
        placeholder={placeholder}
      />

    </FormControl>
  )
}