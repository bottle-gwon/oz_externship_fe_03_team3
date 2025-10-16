import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type Style = Record<string, string | number>

export type StartToEnd = 'flex-start' | 'center' | 'flex-end'

export type Stretch = 'stretch'

export type PProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
