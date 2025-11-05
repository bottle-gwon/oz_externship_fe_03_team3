import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
// import TagSelection from '@/components/recruit/write/tagSelectModal/feat/TagSelection'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import { useState } from 'react'

const GwonTagModalTest = () => {
  const [isOn, setIsOn] = useState(false)
  // const [tagArray, setTagArray] = useState<string[]>([])

  // 모달창 열기
  const onOpen = () => {
    setIsOn(true)
  }
  // 임시 제거 함수
  // const onClickDeleteTag = (tagName: string) => {
  //   if (tagArray.includes(tagName)) {
  //     setTagArray((prev) => prev.filter((el) => el !== tagName))
  //   }
  // }

  return (
    <Vstack gap="xl">
      <TagSelectModal
        isOn={isOn}
        onClose={setIsOn} // 세터 함수로 넘겨줄것  닫거나, 취소시 선택된 태그는 날려야 해서 onClose 이벤트는 내부에서 정의
      />
      <Button onClick={onOpen}>모달 버튼</Button>
      {/* {tagArray.length !== 0 && (
        <TagSelection tagArray={tagArray} onDeleteTag={onClickDeleteTag} />
      )} */}
    </Vstack>
  )
}

export default GwonTagModalTest
