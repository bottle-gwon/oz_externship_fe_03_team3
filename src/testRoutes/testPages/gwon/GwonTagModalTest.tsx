import Button from '@/components/commonInGeneral/button/Button'
import { Vstack } from '@/components/commonInGeneral/layout'
import TagSelectModal from '@/components/recruit/write/tagSelectModal/TagSelectModal'
import { useState } from 'react'

const GwonTagModalTest = () => {
  const [isOn, setIsOn] = useState(false)
  const [tagArray, setTagArray] = useState<string[]>([])

  // 모달창 열기
  const onOpen = () => {
    setIsOn(true)
  }

  return (
    <Vstack>
      <TagSelectModal
        isOn={isOn}
        onClose={setIsOn} // 세터 함수로 넘겨줄것  닫거나, 취소시 선택된 태그는 날려야 해서 onClose 이벤트는 내부에서 정의
        tagArray={tagArray}
        setTagArray={setTagArray}
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default GwonTagModalTest
