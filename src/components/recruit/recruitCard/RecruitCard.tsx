import {
  Bookmark,
  Calendar,
  Eye,
  FileText,
  Pencil,
  Trash2,
  Users,
} from 'lucide-react'
import RoundBox from '../../commonInGeneral/roundBox/RoundBox'
import type { Recruit } from '@/types'
import Tag from '@/components/commonInProject/tag/Tag'
import Button from '@/components/commonInGeneral/button/Button'
import { Hstack, Vstack } from '@/components/commonInGeneral/layout'

export type RecruitCardProps = {
  recruit: Recruit
  isMine?: boolean
  cardClassName?: string
  imageClassName?: string
  onManage?: (recruit: Recruit) => void
  onEdit?: (recruit: Recruit) => void
  onDelete?: (recruit: Recruit) => void
}

const RecruitCard = ({
  recruit,
  isMine = false,
  cardClassName = '',
  imageClassName = 'h-20 w-28',
  onManage,
  onEdit,
  onDelete,
}: RecruitCardProps) => {
  const {
    thumbnail_img_url,
    title,
    expected_headcount,
    due_date,
    tags,
    views_count,
    bookmark_count,
    lectures,
  } = recruit

  return (
    <RoundBox className={`outBox ${cardClassName}`}>
      <Hstack padding="xs">
        <RoundBox
          isBordered={false}
          borderStyle="none"
          padding="none"
          radius="lg"
          className={`${imageClassName} flex-none overflow-hidden bg-gray-200`}
          aria-label="공고 이미지"
        >
          <img
            src={thumbnail_img_url}
            alt="imgBox"
            className={imageClassName}
          />
        </RoundBox>

        <Vstack gap="xs" padding="none" className="flex-1">
          <Hstack
            gap="none"
            padding="none"
            className="items-start justify-between"
          >
            <h1
              aria-label="제목"
              className="truncate text-base font-bold text-gray-900"
            >
              {title}
            </h1>
            <Hstack
              gap="sm"
              padding="xs"
              className="shrink-0 items-center text-[11px] leading-none text-gray-500"
            >
              <span
                aria-label="조회수"
                className="viewCount inline-flex items-center gap-1"
              >
                <Eye className="size-4" /> {views_count}
              </span>
              <span
                aria-label="북마크"
                className="bookmarkCount inline-flex items-center gap-1"
              >
                <Bookmark className="size-4" /> {bookmark_count}
              </span>
              {isMine && (
                <span className="inline-flex items-center gap-3">
                  <button
                    aria-label="수정"
                    className="text-gray-500 hover:text-blue-600"
                    onClick={() => onEdit?.(recruit)}
                  >
                    <Pencil className="size-3.5" />
                  </button>
                  <button
                    aria-label="삭제"
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => onDelete?.(recruit)}
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </span>
              )}
            </Hstack>
          </Hstack>

          <Vstack gap="lg" padding="xs" className="mt-2 text-xs text-gray-500">
            <Hstack
              gap="xs"
              padding="none"
              aria-label="모집인원수"
              className="items-center"
            >
              <Users className="size-4" />
              {/* 추후 svg 아이콘으로 추가 */}
              모집인원 : {expected_headcount ?? ''}명
            </Hstack>

            <Hstack
              gap="xs"
              padding="none"
              aria-label="마감일"
              className="items-center"
            >
              <Calendar className="size-4" />
              {/* 추후 svg 아이콘으로 추가 */}
              마감일 : {(due_date ?? '').slice(0, 10).replace(/-/g, '. ') + '.'}
            </Hstack>
          </Vstack>

          <Vstack gap="xs" padding="none" className="mt-2 text-gray-500">
            <Hstack gap="sm" padding="xs" className="text-xs">
              강의 목록 :
            </Hstack>
            <ul className="list-inside list-disc pl-2">
              {lectures.map((lectures) => (
                <li key={lectures.id} aria-label="강의목록" className="text-xs">
                  {lectures.title}-{lectures.instructor}
                </li>
              ))}
            </ul>
          </Vstack>

          <Hstack
            gap="xs"
            padding="xs"
            className="items-center justify-between"
          >
            <Hstack
              gap="sm"
              padding="none"
              aria-label="태그"
              className="flex-wrap"
            >
              {tags.map((tag) => (
                <Tag key={tag.id} color="primary" isVivid={false}>
                  {tag.name}
                </Tag>
              ))}
            </Hstack>
            {isMine && (
              <Hstack gap="none" padding="none" className="self-center">
                <Button
                  color="blue"
                  className="gap-2 px-6 py-2 text-xs"
                  onClick={() => onManage?.(recruit)}
                >
                  <FileText className="size-4" />
                  {/* 추후 svg 아이콘으로 추가 */}
                  <span>지원내역</span>
                </Button>
              </Hstack>
            )}
          </Hstack>
        </Vstack>
      </Hstack>
    </RoundBox>
  )
}

export default RecruitCard
