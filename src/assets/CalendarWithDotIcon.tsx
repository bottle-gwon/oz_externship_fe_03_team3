import type { SvgProps } from '@/types'

const CalendarWithDotIcon = (props: SvgProps) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0V2H13V0H15V2H19C19.28 2 19.5167 2.09667 19.71 2.29C19.9033 2.48333 20 2.72 20 3V19C20 19.28 19.9033 19.5167 19.71 19.71C19.5167 19.9033 19.28 20 19 20H1C0.72 20 0.483333 19.9033 0.29 19.71C0.0966667 19.5167 0 19.28 0 19V3C0 2.72 0.0966667 2.48333 0.29 2.29C0.483333 2.09667 0.72 2 1 2H5V0H7ZM18 10H2V18H18V10ZM9 12V16H4V12H9ZM5 4H2V8H18V4H15V6H13V4H7V6H5V4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CalendarWithDotIcon
