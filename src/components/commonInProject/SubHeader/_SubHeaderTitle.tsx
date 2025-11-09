interface TitleProps {
  children: React.ReactNode
}

const SubHeaderTitle = ({ children }: TitleProps) => {
  return <h1 className="text-3xl font-bold">{children}</h1>
}

export default SubHeaderTitle
