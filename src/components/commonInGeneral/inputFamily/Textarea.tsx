import type { TextareaProps } from '@/types'

interface WithTextareaProps {
  isInDanger?: boolean
}

const Textarea = ({
  isInDanger,
  ...props
}: TextareaProps & WithTextareaProps) => {
  const { className, ...rest } = props

  const dangerResult = isInDanger
    ? 'border-danger-100 text-danger-600  focus:outline-danger-100'
    : 'border-gray-300  focus:outline-gray-300'

  return (
    <textarea
      {...rest}
      className={`${className} ${dangerResult} rounded-lg border px-3 py-2 outline outline-transparent transition`}
    />
  )
}

export default Textarea
