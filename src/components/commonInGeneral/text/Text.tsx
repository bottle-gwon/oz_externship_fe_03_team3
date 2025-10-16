// import styles from './Text.module.css'
// import type { PProps, Style, XsToXl } from '../../packageInterfaces'
//
// interface TextProps {
//   isMuted?: boolean
//   isBold?: boolean
//   size?: XsToXl
// }
// const Text = ({
//   isMuted,
//   isBold,
//   size = 'md',
//   ...props
// }: TextProps & PProps) => {
//   const { children, style, className, ...rest } = props
//
//   const styleForVar: Style = {}
//   if (isMuted) {
//     styleForVar['--color'] = 'var(--color-muted)'
//   }
//   if (isBold) {
//     styleForVar['--font-weight'] = 'var(--font-weight-semibold)'
//   }
//   styleForVar['--font-size'] = `var(--text-${size})`
//
//   return (
//     <p
//       {...rest}
//       style={{ ...styleForVar, ...style }}
//       className={`${className} ${styles.text}`}
//     >
//       {children}
//     </p>
//   )
// }
//
// export default Text
