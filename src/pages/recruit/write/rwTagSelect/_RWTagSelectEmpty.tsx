import { Vstack } from '@/components/commonInGeneral/layout'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import TagIcon from '@/assets/tag.svg'

const RWTagSelectEmpty = () => {
  return (
    <RoundBox color="mono-bright" padding="xl" borderStyle="dashed">
      <Vstack gap="sm" className="items-center text-gray-500">
        <img src={TagIcon} />
        <Vstack gap="none" className="items-center">
          <h4 className="text-sm">선택된 태그가 없습니다</h4>
          <p className="text-xs">
            태그 검색 버튼을 클릭해서 태그를 추가해보세요
          </p>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default RWTagSelectEmpty
