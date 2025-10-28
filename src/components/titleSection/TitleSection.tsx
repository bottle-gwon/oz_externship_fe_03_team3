import type { ButtonVariant, Color, TitlePageProps } from '@/types'
import Button from '../commonInGeneral/button/Button'
import { ArrowLeft, LogIn } from 'lucide-react'
import ScrollText from '../../assets/scroll-text.svg'
import { Hstack, Vstack } from '../commonInGeneral/layout'
import { useNavigate } from 'react-router'

type TitleButtonContentType = {
  label: string
  color: Color
  icon?: React.ReactNode
  variant?: ButtonVariant
  url: string
}

type TitleContentType = {
  title: string
  subtitle: string
  showBackbutton: boolean
  buttons: (isLoggedIn: boolean) => TitleButtonContentType[]
}

const title: Record<string, TitleContentType> = {
  recruit: {
    title: '스터디 구인 공고',
    subtitle: '새로운 스터디 멤버를 찾거나 관심있는 스터디에 참여해보세요',
    showBackbutton: false,
    buttons: (isLoggedIn: boolean) =>
      isLoggedIn
        ? [
            {
              icon: <img src={ScrollText} />,
              label: '공고 관리',
              color: 'primary',
              variant: 'outlined',
              url: '/recruit/manager',
            },
            {
              label: '+ 공고 작성하기',
              color: 'primary',
              variant: 'contained',
              url: '/recruit/write',
            },
          ]
        : [
            {
              icon: <LogIn />,
              label: '로그인 후 공고 작성',
              color: 'primary',
              variant: 'contained',
              url: '/login',
            },
          ],
  },
  lecture: {
    title: 'IT 강의 목록',
    subtitle: '전문 강사들의 고품질 IT 강의를 만나보세요',
    showBackbutton: false,
    buttons: () => [],
  },
  detail: {
    title: '',
    subtitle: '',
    showBackbutton: true,
    buttons: () => [],
  },
  write: {
    title: '스터디 구인 공고 작성',
    subtitle: '스터디 그룹의 새로운 멤버를 모집하는 공고를 작성해보세요',
    showBackbutton: true,
    buttons: () => [],
  },
  manage: {
    title: '공고 관리',
    subtitle: '내가 등록한 스터디 구인 공고를 관리하세요',
    showBackbutton: true,
    buttons: () => [
      {
        label: '+ 새 공고 작성하기',
        color: 'primary',
        url: '/recruit/write',
      },
    ],
  },
}

const TitleSection = ({ type, isLoggedIn = false }: TitlePageProps) => {
  const content = title[type]
  const buttons = content.buttons(isLoggedIn)
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)
  const handleClick = (url: string) => navigate(url)

  return (
    <Hstack
      gap="none"
      className="h-[100px] w-[1216px] items-center justify-between pb-8"
    >
      <Hstack gap="none" className="items-center">
        {/* 뒤로가기 버튼 */}
        {content.showBackbutton && (
          <button
            onClick={handleBack}
            className="mr-4 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F3F4F6] py-2 hover:bg-[#E5E7EB]"
          >
            <ArrowLeft size={17} className="text-[#3B4350]" />
          </button>
        )}
        <Vstack gap="none" className="h-[68px]">
          <h1 className="pb-2 text-3xl leading-9 font-bold">{content.title}</h1>
          <p className="h-7 pt-1 text-[#52525b]">{content.subtitle}</p>
        </Vstack>
      </Hstack>
      {buttons.length > 0 && (
        <Hstack gap="none">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              color={btn.color}
              variant={btn.variant}
              size={'lg'}
              className="ml-3"
              onClick={() => handleClick(btn.url)}
            >
              {btn.icon && <span className="mr-2">{btn.icon}</span>}
              {btn.label}
            </Button>
          ))}
        </Hstack>
      )}
    </Hstack>
  )
}

export default TitleSection
