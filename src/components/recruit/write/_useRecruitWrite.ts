import {
  recruitEditSchema,
  recruitWriteSchema,
  type RecruitWriteSchema,
} from '@/lib/zodSchema'
import useStudyHubStore from '@/store/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import {
  useForm,
  type FieldErrors,
  type Control,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form'

const useRecruitWrite = (isEditing: boolean) => {
  const setEditingRecruit = useStudyHubStore((state) => state.setEditingRecruit)

  useEffect(() => {
    return () => setEditingRecruit(null)
  }, [setEditingRecruit])

  const {
    handleSubmit,
    watch,
    register: optionalRegister,
    setValue: optionalSetValue,
    control: optionalControl,
    formState: { errors: optionalErrors },
  } = useForm({
    resolver: zodResolver(isEditing ? recruitEditSchema : recruitWriteSchema),
  })

  const errors = optionalErrors as FieldErrors<RecruitWriteSchema>
  const control = optionalControl as Control<RecruitWriteSchema>
  const register = optionalRegister as UseFormRegister<RecruitWriteSchema>
  const setValue = optionalSetValue as UseFormSetValue<RecruitWriteSchema>

  return { handleSubmit, watch, register, setValue, control, errors }
}

export default useRecruitWrite
