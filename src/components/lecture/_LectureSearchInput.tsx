import { Search } from 'lucide-react'
import Input from '../commonInGeneral/inputFamily/input/Input'

const LectureSearchInput = () => {
  return (
    <Input
      icon={<Search size={14} />}
      placeholder="강의명이나 강사명으로 검색..."
    />
  )
}

export default LectureSearchInput
