import type { ReactNode } from 'react'
import { FlexOneContainer } from '../layout'
import ErrorDisplayContext from './_ErrorDisplayContext'
import useErrorDisplayContext from './_useErrorDisplayContext'

type ErrorDisplayColor = 'primary' | 'mono-bright'

const colorToTextColor: Record<ErrorDisplayColor, string> = {
  primary: 'text-primary-500',
  'mono-bright': 'text-gray-200',
}

const ErrorDisplayCode = ({ children }: { children: string }) => {
  const { color, isSmall } = useErrorDisplayContext()
  return (
    <h1
      className={[
        colorToTextColor[color],
        isSmall ? 'text-[48px]' : 'text-[96px]',
        'leading-none font-bold',
      ].join(' ')}
    >
      {children}
    </h1>
  )
}

const ErrorDisplayTitle = ({ children }: { children: string }) => {
  const { isSmall } = useErrorDisplayContext()
  return (
    <h2
      className={[
        isSmall ? 'text-lg' : 'text-[32px]',
        'leading-none font-medium',
      ].join(' ')}
    >
      {children}
    </h2>
  )
}

interface ErrorDisplayProps {
  color?: ErrorDisplayColor
  isSmall?: boolean
  children: ReactNode
}

const ErrorDisplay = ({
  color = 'primary',
  isSmall = false,
  children,
}: ErrorDisplayProps) => {
  return (
    <ErrorDisplayContext.Provider value={{ color, isSmall }}>
      <FlexOneContainer
        className={[
          isSmall ? 'gap-oz-lg' : 'gap-oz-xl',
          'flex h-full flex-col items-center justify-center',
        ].join(' ')}
      >
        {children}
      </FlexOneContainer>
    </ErrorDisplayContext.Provider>
  )
}

ErrorDisplay.Code = ErrorDisplayCode
ErrorDisplay.Title = ErrorDisplayTitle

export default ErrorDisplay
