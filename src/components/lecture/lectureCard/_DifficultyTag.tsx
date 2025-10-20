import Tag from '@/components/commonInProject/tag/Tag'
import type { Difficulty } from '@/types'

const difficultyToColor = {
  EASY: 'success',
  NORMAL: 'primary',
  HARD: 'danger',
} as const

const difficultyToText = {
  EASY: '초급',
  NORMAL: '중급',
  HARD: '고급',
}

interface DifficultyTagProps {
  difficulty: Difficulty
}

const DifficultyTag = ({ difficulty }: DifficultyTagProps) => {
  const color = difficultyToColor[difficulty]
  const text = difficultyToText[difficulty]
  return <Tag color={color}>{text}</Tag>
}

export default DifficultyTag
