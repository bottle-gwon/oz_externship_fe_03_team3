import { createContext } from 'react'

interface ErrorDisplayContextProps {
  color: 'primary' | 'mono-bright'
  isSmall: boolean
}

const ErrorDisplayContext = createContext<ErrorDisplayContextProps | null>(null)

export default ErrorDisplayContext
