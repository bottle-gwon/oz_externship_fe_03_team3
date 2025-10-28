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
import { useEffect, useState, type ReactNode } from 'react'
import TagIcon from '@/assets/tag.svg'
import Divider from '@/components/commonInGeneral/divider/Divider'
import MarkdownEditor from '@/components/commonInGeneral/markdownEditor/MarkdownEditor'
import FileDropzone from '@/components/commonInGeneral/fileDropzone/FileDropzone'
import { Controller, useForm, type FieldValues } from 'react-hook-form'
import useStudyHubStore from '@/store/store'
import dummyGetStudyGroupsResponse from './_dummyGetStudyGroupsResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import { recruitWriteSchema } from '@/lib/zodSchema'
import { useNavigate } from 'react-router'
import { RECRUIT_WRITE_CONFIG } from '@/utils/constants'

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
  const studyGroupArray = useStudyHubStore((state) => state.studyGroupArray)
  const setStudyGroupArray = useStudyHubStore(
    (state) => state.setStudyGroupArray
  )

  const navigate = useNavigate()

  const {
    handleSubmit,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(recruitWriteSchema) })

  // TODO: api 연결할 땐 useQuery로 교체해야
  useEffect(() => {
    const dummyResponse = dummyGetStudyGroupsResponse
    const array = dummyResponse.data.study_groups
    setStudyGroupArray(array)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (_data: FieldValues) => {
    // ---- 테스트할 땐 여기 주석을 해제해주세요
    // console.log({ _data })
    // debugger
    // ---- 여기까지
    // 아직은 하는 것 없음
    // TODO: api 연결 시 채워넣어야
  }

  return (
    <Container width="md" isPadded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vstack gap="xxl">
          {/* 여기 바텀 패딩이 없어야할 거 같은데 */}
          {/* isPaddedBottom 옵션 넣어달라고 하고 우선 이대로 진행하자 */}
          <TitleSection type="write" />

          <WriteBox>
            <H2>기본 정보</H2>
            <Labeled isRequired isInDanger={Boolean(errors.title)}>
              <Labeled.Header>공고 제목</Labeled.Header>
              <Labeled.Input {...register('title')} />
              <Labeled.Footer>{errors?.title?.message}</Labeled.Footer>
            </Labeled>

            <Labeled isRequired isInDanger={Boolean(errors.study_group_id)}>
              <Labeled.Header>대상 스터디 그룹</Labeled.Header>
              <Controller
                control={control}
                name="study_group_id"
                render={({ field: { onChange } }) => (
                  <Select onOptionSelect={onChange}>
                    <Select.Trigger>스터디 그룹을 선택해주세요</Select.Trigger>
                    <Select.Content>
                      {studyGroupArray.map((studyGroup) => (
                        <Select.Option
                          key={studyGroup.id}
                          value={studyGroup.id}
                        >
                          {studyGroup.name}
                        </Select.Option>
                      ))}
                    </Select.Content>
                  </Select>
                )}
              />
              <Labeled.Footer>{errors?.study_group_id?.message}</Labeled.Footer>
            </Labeled>

            <GridContainer>
              <Labeled isRequired isInDanger={Boolean(errors.due_date)}>
                <Labeled.Header>공고 마감 기한</Labeled.Header>
                <Labeled.Input {...register('due_date')} type="date" />
                <Labeled.Footer>{errors?.due_date?.message}</Labeled.Footer>
              </Labeled>

              <Labeled
                isRequired
                isInDanger={Boolean(errors.expected_personnel)}
              >
                <Labeled.Header>예상 모집 인원</Labeled.Header>
                <Controller
                  control={control}
                  name="expected_personnel"
                  render={({ field: { onChange } }) => (
                    <Select onOptionSelect={onChange}>
                      <Select.Trigger>
                        예상 모집 인원을 선택하세요
                      </Select.Trigger>
                      <Select.Content>
                        {Array(RECRUIT_WRITE_CONFIG.MAX_PERSONNEL)
                          .fill(0)
                          .map((_, index) => (
                            <Select.Option
                              key={index}
                              value={index + 1}
                            >{`${index + 1}명`}</Select.Option>
                          ))}
                      </Select.Content>
                    </Select>
                  )}
                />
                <Labeled.Footer>
                  {errors?.expected_personnel?.message}
                </Labeled.Footer>
              </Labeled>
            </GridContainer>
          </WriteBox>

          <WriteBox>
            <H2>공고 내용</H2>
            <Labeled isRequired isInDanger={Boolean(errors.content)}>
              <Labeled.Header>스터디 그룹 소개</Labeled.Header>
              <Hstack className="justify-between text-xs text-gray-500">
                <p>마크다운 문법을 사용할 수 있습니다</p>
                <p>이미지 {dummyImageCount}/5개</p>
              </Hstack>
              <Controller
                control={control}
                name="content"
                render={({ field: { onChange } }) => (
                  <MarkdownEditor onChange={onChange} />
                )}
              />
              <Labeled.Footer>{errors?.content?.message}</Labeled.Footer>
              <Labeled.Footer>
                • 마크다운 문법: **굵게**, *기울임*, # 제목, - 목록 등
              </Labeled.Footer>
              <Labeled.Footer>
                • 이미지 추가: ![설명](이미지URL) - 최대{' '}
                {RECRUIT_WRITE_CONFIG.MAX_IMAGE}개, 각{' '}
                {RECRUIT_WRITE_CONFIG.MAX_IMAGE_FILE_SIZE} 이하
              </Labeled.Footer>
            </Labeled>
          </WriteBox>

          <WriteBox>
            <H2>추가 정보</H2>

            <Labeled isInDanger={Boolean(errors.estimated_cost)}>
              <Labeled.Header>예상 결제 비용(원)</Labeled.Header>
              <Labeled.Input
                {...register('estimated_cost')}
                type="number"
                placeholder="미입력시 강의 비용 자동 계산"
              />
              <Labeled.Footer>{errors?.estimated_cost?.message}</Labeled.Footer>
            </Labeled>

            <Labeled isInDanger={Boolean(errors.tags)}>
              <Hstack className="items-end justify-between">
                <Labeled.Header>사용자 정의 태그</Labeled.Header>
                <Button
                  type="button"
                  color="primary"
                  size="sm"
                  className="mb-oz-xs"
                >
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
              <Labeled.Footer>{errors?.tags?.message}</Labeled.Footer>
              <Labeled.Footer>
                태그는 최대 {RECRUIT_WRITE_CONFIG.MAX_TAG}개까지 선택할 수
                있습니다. ({dummyTagCount}/{RECRUIT_WRITE_CONFIG.MAX_TAG})
              </Labeled.Footer>
            </Labeled>

            <Labeled isInDanger={Boolean(errors.attachments)}>
              <Labeled.Header>참고 파일 업로드</Labeled.Header>
              <FileDropzone
                onChange={(fileArray) => setValue('attachments', fileArray)}
              />
              <Labeled.Footer>{errors?.attachments?.message}</Labeled.Footer>
            </Labeled>
          </WriteBox>

          <Vstack gap="xl">
            <Divider />
            <Hstack className="justify-end">
              <Button type="button" onClick={() => navigate(-1)}>
                취소
              </Button>
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
