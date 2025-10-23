interface SubtitleProps {
  children: React.ReactNode
}

const SubHeaderSubtitle = ({ children }: SubtitleProps) => {
  return <p className="h-7 pt-1 text-[#52525b]">{children}</p>
}
export default SubHeaderSubtitle
