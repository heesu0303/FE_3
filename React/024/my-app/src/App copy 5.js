import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState(0);

  function handleClickLike() {
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  function handleMouseOver() {
    setMessage('world');
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <button onMouseOver={handleMouseOver}>mouse over</button>
          <p>{message}</p>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;