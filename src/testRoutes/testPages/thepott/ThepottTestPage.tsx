import { Vstack } from '../../../components/commonInGeneral/layout'
import Container from '../../../components/commonInGeneral/layout/_Container'
import Button from '@/components/commonInGeneral/button/Button'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import useDebounceToggle from '@/hooks/useDebounceToggle'
import { useState } from 'react'

const ThepottTestPage = () => {
  const [boolValue, setBoolValue] = useState(false)
  const { debouncedBoolValue } = useDebounceToggle(boolValue)

  return (
    <Container width="md" isPadded>
      <Vstack gap="xxl">
        <TitledRoundBox>
          <TitledRoundBox.Title>디바운스 토글</TitledRoundBox.Title>
          <p>bool value: {JSON.stringify(boolValue)}</p>
          <p>debounced bool value: {JSON.stringify(debouncedBoolValue)}</p>
          <Button onClick={() => setBoolValue(!boolValue)}>토글</Button>
        </TitledRoundBox>
      </Vstack>
    </Container>
  )
}

export default ThepottTestPage
