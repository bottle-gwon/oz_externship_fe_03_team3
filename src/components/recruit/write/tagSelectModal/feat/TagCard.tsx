import { Hstack } from '@/components/commonInGeneral/layout'
import { Check } from 'lucide-react'

interface TagCard {
  name: string
  isChecked: boolean
  onClickTag: (newname: string) => void
}

const TagCard = ({ name, isChecked, onClickTag }: TagCard) => {
  return (
    <div
      className={`h-[50px] w-[624px] rounded-sm border border-gray-200 ${isChecked && 'border-[#eab308] bg-[#fefce8]'}`}
      onClick={() => {
        onClickTag(name)
      }}
    >
      <Hstack
        className={`h-full items-center justify-between px-[13px] ${isChecked && 'text-[#854d0e]'}`}
      >
        <span>{name}</span>

        {/* 체크 박스 디자인에 맞게 커스텀 */}
        <label htmlFor="tag-check" className="pointer-events-none">
          <input
            type="checkbox"
            id="tag-check"
            className="peer hidden appearance-none"
            checked={isChecked}
          />
          <Hstack className="h-[20px] w-[20px] items-center justify-center rounded-sm border-2 border-gray-300 text-transparent peer-checked:border-transparent peer-checked:bg-[#eab308] peer-checked:text-white">
            <Check className="size-3.5" />
          </Hstack>
        </label>
      </Hstack>
    </div>
  )
}

export default TagCard
