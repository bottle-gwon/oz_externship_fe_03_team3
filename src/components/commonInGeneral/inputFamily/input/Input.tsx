import type { InputProps } from '@/types'
import type { JSX } from 'react'
import { Hstack } from '../../layout'

interface WithInputProps {
  isInDanger?: boolean
  icon?: JSX.Element
}

const Input = ({ isInDanger, icon, ...props }: InputProps & WithInputProps) => {
  const { className, ...rest } = props
  const dangerResult = isInDanger
    ? 'border-danger-100 focus-within:outline-danger-100'
    : 'border-gray-300 focus-within:border-primary-500 focus-within:outline-primary-500'

  return (
    <Hstack
      className={`${className} ${dangerResult} gap-0 rounded-lg border px-3 py-2 outline outline-transparent transition`}
    >
      <div className="text-gray-400">{icon && icon}</div>
      <input {...rest} className="w-full border-0 outline-0" />
    </Hstack>
  )
}

export default Input
