import Button from '@/components/commonInGeneral/button/Button'
import ConfirmationModal from '@/components/commonInGeneral/modal/confirmationModal/ConfirmationModal'
import { useState } from 'react'

interface AddTagErrorModalInterface {
  isOn: boolean
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  tag: string
}

const AddTagErrorModal = ({
  isOn,
  setIsOn,
  tag,
}: AddTagErrorModalInterface) => {
  return (
    <ConfirmationModal
      isOn={isOn}
      onClose={() => {
        setIsOn(false)
      }}
    >
      <ConfirmationModal.Title>
        <h4>{`${tag}는(은) 이미 있는 태그 입니다.`}</h4>
      </ConfirmationModal.Title>

      <ConfirmationModal.Content>
        <span>다른 태그를 추가 하시거나 다시 검색 부탁드립니다.</span>
      </ConfirmationModal.Content>

      <ConfirmationModal.ButtonSection>
        <Button onClick={() => setIsOn(false)}>확인</Button>
      </ConfirmationModal.ButtonSection>
    </ConfirmationModal>
  )
}

export default AddTagErrorModal
