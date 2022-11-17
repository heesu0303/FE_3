import { useState, useRef, useEffect } from 'react'


export default function App() {
  const searchValue = useRef(null)

  const handleSearch = (e) => {
    console.log(searchValue.current.value)
    searchValue.current.value = ''
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 : 
        <input type="text" ref={searchValue}/>
      </label>
      <button type="button" onClick={handleSearch}>검색</button>
    </div>
  )
}