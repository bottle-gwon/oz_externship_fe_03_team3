import { GridContainer, Hstack, Vstack } from '../layout'
import RoundBox from '../roundBox/RoundBox'
import Skeleton from './Skeleton'

const HowToUseSkeleton = () => {
  return (
    <Vstack gap="xxl">
      <RoundBox>
        <p>Vstack</p>
        <Vstack>
          <p>heightInPixel=200</p>
          <Skeleton heightInPixel={200} />
          <p>heightInPixel=200 widthInPixel=400</p>
          <Skeleton heightInPixel={200} widthInPixel={400} />
          <p>widthInPixel=400</p>
          <Skeleton widthInPixel={400} />
        </Vstack>
        <p>
          Vstack에서는 한 줄이 가로 방향으로 생기므로 너비는 지정을 안 하면 가로
          한 줄 전체를 차지합니다
        </p>
        <p>반면 높이 설정은 필수입니다</p>
      </RoundBox>

      <RoundBox>
        <p>Hstack 높이 300px</p>
        <Hstack className="h-[300px]">
          <p>heightInPixel=200</p>
          <Skeleton heightInPixel={200} />
          <p>heightInPixel=200 widthInPixel=400</p>
          <Skeleton heightInPixel={200} widthInPixel={400} />
          <p>widthInPixel=400</p>
          <Skeleton widthInPixel={400} />
        </Hstack>
        <p>
          Hstack에서는 한 줄이 세로 방향으로 생기므로 높이는 지정을 안 하면 세로
          한 줄 전체를 차지합니다
        </p>
        <p>반면 너비 설정은 필수입니다</p>
      </RoundBox>

      <RoundBox>
        <p>행 높이 설정 안 한 GridContainer</p>
        <p>브라우저 화면 너비를 바꾸면서 확인해보세요</p>
        <GridContainer>
          <p>heightInPixel=200</p>
          <Skeleton heightInPixel={200} />
          <p>heightInPixel=200 widthInPixel=400</p>
          <Skeleton heightInPixel={200} widthInPixel={400} />
          <p>widthInPixel=400</p>
          <Skeleton widthInPixel={400} />
          <p>
            Grid의 경우 너비, 높이를 지정하지 않으면 셀의 너비, 높이를
            상속받습니다
          </p>
        </GridContainer>
      </RoundBox>

      <RoundBox>
        <p>행 높이 300px GridContainer</p>
        <p>브라우저 화면 너비를 바꾸면서 확인해보세요</p>
        <GridContainer className="auto-rows-[300px]">
          <p>heightInPixel=200</p>
          <Skeleton heightInPixel={200} />
          <p>heightInPixel=200 widthInPixel=400</p>
          <Skeleton heightInPixel={200} widthInPixel={400} />
          <p>widthInPixel=400</p>
          <Skeleton widthInPixel={400} />
        </GridContainer>
      </RoundBox>
    </Vstack>
  )
}

export default HowToUseSkeleton
