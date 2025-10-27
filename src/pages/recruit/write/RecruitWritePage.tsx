import Button from '@/components/commonInGeneral/button/Button'
import Labeled from '@/components/commonInGeneral/inputFamily/labeled/Labeled'
import {
  GridContainer,
  Hstack,
  Vstack,
} from '@/components/commonInGeneral/layout'
import Container from '@/components/commonInGeneral/layout/_Container'
import RoundBox from '@/components/commonInGeneral/roundBox/RoundBox'
import Select from '@/components/commonInGeneral/select/Select'
import TitleSection from '@/components/titleSection/TitleSection'
import { Plus, Send } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import TagIcon from '@/assets/tag.svg'
import Divider from '@/components/commonInGeneral/divider/Divider'
import MarkdownEditor from '@/components/commonInGeneral/markdownEditor/MarkdownEditor'
import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { useForm, type FieldValues } from 'react-hook-form'

const H2 = ({ children }: { children: string }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>
}

const WriteBox = ({ children }: { children: ReactNode }) => {
  return (
    <RoundBox padding="xxl">
      <Vstack gap="xl">{children}</Vstack>
    </RoundBox>
  )
}

const RecruitWritePage = () => {
  // TODO: 나중에 이미지 업로드와 연동해야
  const [dummyImageCount, _setDummyImageCount] = useState(0)
  const [dummyTagCount, _setDummyTagCount] = useState(0)

  const { handleSubmit, setValue } = useForm()

  const onSubmit = (_data: FieldValues) => {
    // 아직은 하는 것 없음
    // TODO: api 연결 시 채워넣어야
  }

  return (
    <Container width="md" isPadded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vstack gap="xxl">
          {/* 여기 바텀 패딩이 없어야할 거 같은데 */}
          {/* isPaddedBottom 옵션 넣어달라고 하고 우선 이대로 진행하자 */}
          <TitleSection type="create" />

          <WriteBox>
            <H2>기본 정보</H2>
            <Labeled isRequired>
              <Labeled.Header>공고 제목</Labeled.Header>
              <Labeled.Input />
              <Labeled.Footer></Labeled.Footer>
            </Labeled>
            <Labeled isRequired>
              <Labeled.Header>대상 스터디 그룹</Labeled.Header>
              <Select onOptionSelect={() => null}>
                <Select.Trigger>스터디 그룹을 선택해주세요</Select.Trigger>
                <Select.Content>
                  <Select.Option>점프 투 파이썬</Select.Option>
                  <Select.Option>자료구조와 C</Select.Option>
                  <Select.Option>파이썬으로 크롤러 만들기</Select.Option>
                  <Select.Option>UI와UX 알아보기</Select.Option>
                  <Select.Option>모던 자바스크립트</Select.Option>
                </Select.Content>
              </Select>
              <Labeled.Footer></Labeled.Footer>
            </Labeled>

            <GridContainer>
              <Labeled isRequired>
                <Labeled.Header>공고 마감 기한</Labeled.Header>
                <Labeled.Input type="date" />
                <Labeled.Footer></Labeled.Footer>
              </Labeled>
              <Labeled isRequired>
                <Labeled.Header>예상 모집 인원</Labeled.Header>
                <Select onOptionSelect={() => null}>
                  <Select.Trigger>예상 모집 인원을 선택하세요</Select.Trigger>
                  <Select.Content>
                    <Select.Option>1명</Select.Option>
                    <Select.Option>2명</Select.Option>
                    <Select.Option>3명</Select.Option>
                    <Select.Option>에이 모르겠다</Select.Option>
                  </Select.Content>
                </Select>
              </Labeled>
            </GridContainer>
          </WriteBox>

          <WriteBox>
            <H2>공고 내용</H2>
            <Labeled isRequired>
              <Labeled.Header>스터디 그룹 소개</Labeled.Header>
              <Hstack className="justify-between text-xs text-gray-500">
                <p>마크다운 문법을 사용할 수 있습니다</p>
                <p>이미지 {dummyImageCount}/5개</p>
              </Hstack>

              <MarkdownEditor />

              <Labeled.Footer>
                • 마크다운 문법: **굵게**, *기울임*, # 제목, - 목록 등
              </Labeled.Footer>
              <Labeled.Footer>
                • 이미지 추가: ![설명](이미지URL) - 최대 5개, 각 5MB 이하
              </Labeled.Footer>
            </Labeled>
          </WriteBox>

          <WriteBox>
            <H2>추가 정보</H2>

            <Labeled>
              <Labeled.Header>예상 결제 비용(원)</Labeled.Header>
              <Labeled.Input placeholder="미입력시 강의 비용 자동 계산" />
              <Labeled.Footer></Labeled.Footer>
            </Labeled>

            <Labeled>
              <Hstack className="items-end justify-between">
                <Labeled.Header>사용자 정의 태그</Labeled.Header>
                <Button color="primary" size="sm" className="mb-oz-xs">
                  <Plus size={14} />
                  태그 검색
                </Button>
              </Hstack>
              <RoundBox color="mono-bright" padding="xl" borderStyle="dashed">
                <Vstack gap="sm" className="items-center text-gray-500">
                  <img src={TagIcon} />
                  <Vstack gap="none" className="items-center">
                    <h4 className="text-sm">선택된 태그가 없습니다</h4>
                    <p className="text-xs">
                      태그 검색 버튼을 클릭해서 태그를 추가해보세요
                    </p>
                  </Vstack>
                </Vstack>
              </RoundBox>
              <Labeled.Footer>
                태그는 최대 5개까지 선택할 수 있습니다. ({dummyTagCount}/5)
              </Labeled.Footer>
            </Labeled>

            <Labeled>
              <Labeled.Header>참고 파일 업로드</Labeled.Header>
              <FileDropzone setValue={setValue} />
              <Labeled.Footer></Labeled.Footer>
            </Labeled>
          </WriteBox>

          <Vstack gap="xl">
            <Divider />
            <Hstack className="justify-end">
              <Button>취소</Button>
              <Button color="primary">
                <Send size={16} />
                공고 등록하기
              </Button>
            </Hstack>
          </Vstack>
        </Vstack>
      </form>
    </Container>
  )
}

export default RecruitWritePage
