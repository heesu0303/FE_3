import React, { useState, useMemo, useRef } from 'react'



export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  function handleInputName(e) {
    setName(e.target.value)
    console.log('name렌더링')
  }
  
  function handleInputId(e) {
    setId(e.target.value)
    console.log('id렌더링')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newInfo = [...userInfo, {name, id}]
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo)
  }

  function getNum(li) {
    console.log('li렌더링')
    return li.length
  }

  return (
    <>
      <form>
        <input 
          type="text"
          placeholder='이름을 입력하세요.'
          onChange={handleInputName}
          ref={inputName} 
        />
        <input 
          type="text"
          placeholder='아이디를 입력하세요.'
          onChange={handleInputId}
          ref={inputId} 
        />
        <button type="submit" onClick={handleSubmit}>회원가입</button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{getNum(userInfo)}</span>
    </>
  );
}
