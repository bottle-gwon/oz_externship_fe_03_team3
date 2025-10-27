interface SubtitleProps {
  children: React.ReactNode
}

const SubHeaderSubtitle = ({ children }: SubtitleProps) => {
  return <p className="pt-oz-xs text-gray-600">{children}</p>
}
export default SubHeaderSubtitle
