import React, { useState } from 'react';

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // 새로고침 실행을 막아줌
    console.log('막혔다!');
    alert(`id : ${id} pw : ${pw}`)
  } 

  const handleIdInput = (e) => {
    console.log('아이디가 수정되었습니다.');
    console.log(e.target.value);
    setId(e.target.value);
  }
  
  const handlePwInput = (e) => {
    console.log('패스워드가 수정되었습니다.');
    setPw(e.target.value);
  }

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label>
        ID :
        <input type="text" onChange={handleIdInput}/>
      </label>
      <label>
        PW :
        <input type="password" onChange={handlePwInput}/>
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;