import { Vstack } from '../layout'
import RoundBox from './RoundBox'

// color
// - mono-bright: 흰색
// - mono-dim: 밝은 회색
// - primary
// - danger
// - success
// - blue: 파란 상자는 피그마 공통 컴포넌트 설명 칸에서만 사용되고 실제 화면에선 사용 안 됨
//
// isShadowed: boolean    <<---- 프로필 아이콘 누르면 나오는 드롭다운에서만 그림자 사용됨
//
// isBordered: boolean    <<---- 테두리 사용 여부
//
// padding
// - none: 0
// - xs: 4px
// - sm: 8px
// - md: 12px
// - lg: 16px
// - xl: 24px
// - xxl: 32px
//
// radius
// - sm: 4px    <<---- 강의 카드에서 사용되는 작고 노란 태그
// - md: 8px    <<---- 나머지 둥근 것들
// - lg: 12px    <<---- 화면 가장 겉에 있는 흰 round box
//
const HowToUseRoundBox = () => {
  return (
    <Vstack>
      <RoundBox>아무 것도 설정 안 하는 건</RoundBox>
      <RoundBox
        color="mono-bright"
        isShadowed={false}
        isBordered
        padding="md"
        radius="md"
      >
        이렇게 설정하는 것과 같습니다
      </RoundBox>
    </Vstack>
  )
}

export default HowToUseRoundBox
