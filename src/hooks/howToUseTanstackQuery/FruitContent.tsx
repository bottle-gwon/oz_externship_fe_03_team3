import { Vstack } from '@/components/commonInGeneral/layout'
import useFruit from './useFruit'
import Button from '@/components/commonInGeneral/button/Button'

const FruitContent = () => {
  const { fruitPost, fruitPut } = useFruit()

  //NOTE: mutate을 할 땐 {data, newOne}을 .mutate의 전달인자로 넣습니다
  return (
    <Vstack>
      <Button
        onClick={() =>
          fruitPost.mutate({ data: { fruit_name: 'banana' }, newOne: 'banana' })
        }
      >
        POST banana
      </Button>

      <Button
        onClick={() =>
          fruitPut.mutate({ data: { fruit_name: 'apple' }, newOne: 'apple' })
        }
      >
        PUT 5th to apple
      </Button>
    </Vstack>
  )
}

export default FruitContent
