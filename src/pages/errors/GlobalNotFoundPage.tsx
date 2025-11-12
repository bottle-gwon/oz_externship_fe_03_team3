import NotFoundContent from '@/components/commonInGeneral/error/NotFoundContent'

const GlobalNotFoundPage = () => {
  return (
    <NotFoundContent
      path={import.meta.env.VITE_LANDING_PAGE_URL}
      label="홈으로"
      isExternal
    />
  )
}

export default GlobalNotFoundPage
