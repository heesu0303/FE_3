import { useState, useRef, useEffect } from 'react'

// 실제로는 fetch해서 얻어온 데이터라고 생각해주세요.
const data = [
  '개발자 키링 개리',
  '개발자 파우치 위니브',
  '개발자 담요',
  '개발자 키보드',
  '일반 키보드',
  '손코딩 노트',
  '일반 무지 노트',
  '위니브 스티커 팩 - 1',
  '위니브 스티커 팩 - 2'
]


export default function App() {
  const searchValue = useRef(null)
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = (e) => {
    console.log(searchValue.current.value)

    setSearchResult(data.filter(item => item.indexOf(searchValue.current.value) !== -1).map(item => <p key={item}>{item}</p>))

    searchValue.current.value = ''
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 : 
        <input type="text" ref={searchValue}/>
      </label>
      <button type="button" onClick={handleSearch}>검색</button>
      {searchResult}
    </div>
  )
}