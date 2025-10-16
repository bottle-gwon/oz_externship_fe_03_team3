// import type { DivProps, None, Style, XsToXl } from '../../packageInterfaces'
// import styles from './RoundBox.module.css'
//
// interface WithRoundBoxProps {
//   isShadowed?: boolean
//   padding?: XsToXl | None
// }
//
// const RoundBox = ({
//   isShadowed = true,
//   padding = 'md',
//   ...props
// }: DivProps & WithRoundBoxProps) => {
//   const { style, className, children, ...rest } = props
//
//   const styleForVar: Style = {}
//   styleForVar['--shadow'] = isShadowed ? 'var(--drop-shadow-md)' : 0
//   styleForVar['--padding'] =
//     padding === 'none' ? 0 : `var(--spacing-${padding})`
//   // styleForVar["--padding"] = "var(--spacing-lg)"
//   // styleForVar["--border"] = isShadowed ? "none" : "1px solid var(--color-dimdimdim)"
//   styleForVar['--border-color-hover'] = isShadowed
//     ? 'transparent'
//     : 'var(--color-dimdim)'
//
//   return (
//     <div
//       {...rest}
//       style={{ ...styleForVar, ...style }}
//       className={`${className} ${styles.roundBox}`}
//     >
//       {children}
//     </div>
//   )
// }
//
// export default RoundBox
