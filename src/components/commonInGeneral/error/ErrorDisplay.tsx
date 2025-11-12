import type { ReactNode } from 'react'
import { FlexOneContainer } from '../layout'

const ErrorDisplayCode = ({ children }: { children: string }) => {
  return (
    <h1 className="text-primary-500 text-[96px] leading-none font-bold">
      {children}
    </h1>
  )
}

const ErrorDisplayTitle = ({ children }: { children: string }) => {
  return <h2 className="text-[32px] leading-none font-medium">{children}</h2>
}

const ErrorDisplay = ({ children }: { children: ReactNode }) => {
  return (
    <FlexOneContainer className="gap-oz-xl flex h-full flex-col items-center justify-center">
      {children}
    </FlexOneContainer>
  )
}

ErrorDisplay.Code = ErrorDisplayCode
ErrorDisplay.Title = ErrorDisplayTitle

export default ErrorDisplay
