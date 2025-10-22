import type { DivProps, InputProps, PProps, TextareaProps } from '@/types'
import LabeledContext from './LabeledContext'
import useLabeledContext from './useLabeledContext'
import { Hstack, Vstack } from '../../layout'
import Input from '../input/Input'
import Textarea from '../textarea/Textarea'

const LabeledHeader = (props: PProps) => {
  const { className, children, ...rest } = props

  const { isRequired } = useLabeledContext()

  return (
    <Hstack gap="xs">
      <p {...rest} className={`${className} text-sm font-medium`}>
        {children}
      </p>
      {isRequired && <p className="text-danger-600">*</p>}
    </Hstack>
  )
}

const LabeledFooter = (props: PProps) => {
  const { className, children, ...rest } = props
  const { isInDanger } = useLabeledContext()

  const dangerResult = isInDanger ? 'text-danger-600' : ''

  return (
    <p {...rest} className={`${className} ${dangerResult} text-sm`}>
      {children}
    </p>
  )
}

const LabeledInput = (props: InputProps) => {
  const { isInDanger } = useLabeledContext()
  return <Input {...props} isInDanger={isInDanger} />
}

const LabeledTextarea = (props: TextareaProps) => {
  const { isInDanger } = useLabeledContext()
  return <Textarea {...props} isInDanger={isInDanger} />
}

interface WithLabelGroupProps {
  isInDanger?: boolean
  isRequired?: boolean
}

const Labeled = ({
  isInDanger = false,
  isRequired = false,
  ...props
}: DivProps & WithLabelGroupProps) => {
  const { className, children, ...rest } = props

  return (
    <LabeledContext.Provider value={{ isInDanger, isRequired }}>
      <Vstack {...rest} className={`${className} gap-0`}>
        {children}
      </Vstack>
    </LabeledContext.Provider>
  )
}

Labeled.Header = LabeledHeader
Labeled.Input = LabeledInput
Labeled.Textarea = LabeledTextarea
Labeled.Footer = LabeledFooter

export default Labeled
