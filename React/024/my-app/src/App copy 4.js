import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  // let heart = (like+'').match(/3|6|9/g) ? '👏' : ''
  // let heart = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length? '👏' : '';
  let heart = ''
  for (let i of String(like)) {
    if (i === '3') {
      heart = '👏'
    } else if (i === '6') {
      heart = '👏'
    } else if (i === '9') {
      heart = '👏'
    }
  }  

  function handleClickLike() {
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ''}</span>
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