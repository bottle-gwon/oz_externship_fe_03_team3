import TagList from '../../../components/recruit/write/tagSelectModal/feat/TagList'

const EXAMPLE_DATA = {
  tags: [
    { id: 1, name: 'Python' },
    { id: 2, name: 'AI' },
    { id: 3, name: '딥러닝' },
    { id: 4, name: '밥' },
    { id: 5, name: 'C언어' },
  ],
  page: 1,
  page_size: 5,
  total_count: 50,
}

const GwonTestPage = () => {
  return (
    <div className="mt-10">
      <TagList
        tags={EXAMPLE_DATA.tags}
        page={EXAMPLE_DATA.page}
        page_size={EXAMPLE_DATA.page_size}
        total_count={EXAMPLE_DATA.total_count}
      />
    </div>
  )
}

export default GwonTestPage
