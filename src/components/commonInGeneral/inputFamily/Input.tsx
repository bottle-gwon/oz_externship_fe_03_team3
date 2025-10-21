import type { InputProps } from '@/types'

interface WithInputProps {
  isInDanger?: boolean
}
const Input = ({
  isInDanger,
  className,
  ...rest
}: InputProps & WithInputProps) => {
  const dangerResult = isInDanger
    ? 'border-danger-100 text-danger-600  focus:outline-danger-100'
    : 'border-gray-300  focus:outline-gray-300'

  return (
    <input
      {...rest}
      className={`${className} ${dangerResult} rounded-lg border px-3 py-2 outline outline-transparent transition`}
    />
  )
}

export default Input
