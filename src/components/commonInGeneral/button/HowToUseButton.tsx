import { Vstack } from '../layout'
import Button from './Button'

// color
// - mono
// - primary
// - danger
// - success
// - blue

// variant
// - contained
// - outlined ---- mono, primary만 지원
// - ghost

// status
// - enabled
// - disabled
// - pending ----- 로딩 중, 스피너 돌아감

// size
// - sm: height 36px
// - md: height 40px
// - lg: height 48px

// /test/thepott/button
// 에서 확인할 수 있습니다
const HowToUseButton = () => {
  return (
    <Vstack>
      <Button>버튼</Button>
      <Button color="mono" variant="contained" status="enabled" size="md">
        아무 것도 설정 안 한 건 이것과 같습니다
      </Button>
    </Vstack>
  )
}

export default HowToUseButton
