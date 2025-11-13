import Button from '@/components/commonInGeneral/button/Button'
import Dropdown from '@/components/commonInGeneral/dropdown/Dropdown'
import Skeleton from '@/components/commonInGeneral/skeleton/Skeleton'
import { Bell } from 'lucide-react'
import { Suspense } from 'react'
import NotificationBox from './_NotificationBox'

const NotificationButton = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="ghost" size="lg">
          <Bell />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Suspense
          fallback={<Skeleton heightInPixel={475} widthInPixel={384} />}
        >
          <NotificationBox />
        </Suspense>
      </Dropdown.Content>
    </Dropdown>
  )
}

export default NotificationButton
