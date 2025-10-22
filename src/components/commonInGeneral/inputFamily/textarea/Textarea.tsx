import type { TextareaProps } from '@/types'

interface WithTextareaProps {
  isInDanger?: boolean
  isShort?: boolean
}

// isShort
// - true ---- rows=3, 가능한 시간대 입력란
// - false ---- rows=4, 그 외 모든 textarea 입력란
const Textarea = ({
  isInDanger,
  isShort,
  ...props
}: TextareaProps & WithTextareaProps) => {
  const { cols: _cols, className, ...rest } = props

  const dangerResult = isInDanger
    ? 'border-danger-100 text-danger-600  focus:outline-danger-100'
    : 'border-gray-300  focus:outline-gray-300'

  return (
    <textarea
      {...rest}
      rows={isShort ? 3 : 4}
      className={`${className} ${dangerResult} resize-none rounded-lg border px-4 py-3 outline outline-transparent transition`}
    />
  )
}

export default Textarea
