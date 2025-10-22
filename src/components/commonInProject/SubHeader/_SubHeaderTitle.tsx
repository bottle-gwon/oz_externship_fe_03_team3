interface TitleProps {
  children: React.ReactNode
}

const SubHeaderTitle = ({ children }: TitleProps) => {
  return <h1 className="pb-2 text-3xl leading-9 font-bold">{children}</h1>
}

export default SubHeaderTitle
