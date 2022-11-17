import { useState, useRef } from 'react'

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

export default function App() {
  const nameValue = useRef(null)
  const ageValue = useRef(null)
  const genderValue = useRef(null)
  const [introduce, setIntroduce] = useState('')

  const handleIntroduce = (e) => {
    setIntroduce(
      <p>
        제 이름은 {nameValue.current.value}입니다. 
        저는 {ageValue.current.value}고요. 
        나이는 {genderValue.current.value}입니다.
      </p>
    )
    nameValue.current.value = ''
    ageValue.current.value = ''
    genderValue.current.value = ''
  }

  return (
    <>
      <label>
        이름 : 
        <input type="text" ref={nameValue}/>
      </label>
      <br/>
      <br/>
      <label>
        나이 : 
        <input type="text" ref={ageValue}/>
      </label>
      <br/>
      <br/>
      <label>
        성별 : 
        <input type="text" ref={genderValue}/>
      </label>
      <br/>
      <br/>
      <button type="button" onClick={handleIntroduce}>자기소개 시이작!</button>
      {introduce}
    </>
  )
}