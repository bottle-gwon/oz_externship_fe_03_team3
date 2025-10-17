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
// - pending

// size
// - sm: height 36px
// - md: height 40px
// - lg: height 48px

const HowToUseButton = () => {
  return (
    <Vstack>
      <Button>버튼</Button>
    </Vstack>
  )
}

export default HowToUseButton
