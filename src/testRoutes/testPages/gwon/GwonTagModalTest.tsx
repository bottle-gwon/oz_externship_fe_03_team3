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

  // 모달창 닫기
  const onClose = () => {
    setIsOn(false)
  }

  return (
    <Vstack>
      <TagSelectModal
        isOn={isOn}
        onClose={onClose}
        tagArray={tagArray}
        setTagArray={setTagArray}
      />
      <Button onClick={onOpen}>모달 버튼</Button>
    </Vstack>
  )
}

export default GwonTagModalTest
