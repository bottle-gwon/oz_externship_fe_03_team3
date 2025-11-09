import UsersThreeIcon from '@/assets/UsersThreeIcon'
import { Vstack } from '../../../components/commonInGeneral/layout'
import Container from '../../../components/commonInGeneral/layout/_Container'
import Button from '@/components/commonInGeneral/button/Button'
import TitledRoundBox from '@/components/commonInProject/TitledRoundBox/TitledRoundBox'
import useDebounceToggle from '@/hooks/useDebounceToggle'

const ThepottTestPage = () => {
  const initialBoolValue = false
  const { debouncedBoolValue, toggleBoolValue, realTimeBoolValue } =
    useDebounceToggle(initialBoolValue)

  return (
    <Container width="md" isPadded>
      <Vstack gap="xxl">
        <TitledRoundBox>
          <TitledRoundBox.Title>디바운스 토글</TitledRoundBox.Title>
          <p>bool value: {JSON.stringify(realTimeBoolValue)}</p>
          <p>debounced bool value: {JSON.stringify(debouncedBoolValue)}</p>
          <Button onClick={toggleBoolValue}>토글</Button>
        </TitledRoundBox>
        <TitledRoundBox>
          <TitledRoundBox.Title>아이콘 테스트</TitledRoundBox.Title>
          <UsersThreeIcon className="size-10 text-red-400" />
        </TitledRoundBox>
      </Vstack>
    </Container>
  )
}

export default ThepottTestPage
