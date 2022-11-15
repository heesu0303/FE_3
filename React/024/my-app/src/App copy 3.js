import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? '❤️' : ''  

  function handleClickLike() {
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ''}</span>
          {/* {} 안에서는 if, for 등 조건문 반복문은 못쓴다. 그래서 삼항연산자를 써야한다.*/}
          {/* 만약 일반 for 반복문을 쓰고 싶다면
            1. html들을 담아둘 array 자료를 하나 만들어줍니다.
            2. 일반 for 반복문을 이용해서 반복문을 돌림
            3. 반복될 때 마다 array자료에 div 하나씩 추가해줍니다
            4. 원하는 곳에 {array자료} 사용하면 됩니다.
            
            function App (){
              var 어레이 = [];
              for( var i = 0; i < 3; i++) {
                어레이.push(<div>안녕</div>)
              }
              return (
                <div>
                { 어레이 }
                </div>
              )
            }
            예를 들면 이런 식입니다.
            이렇게 해도 <div>안녕</div> 이게 3개 출현합니다.
            for 문법은 JSX 안에서 사용할 수 없어서 저렇게 바깥에서 쓰면 됩니다.
            귀찮으면 map을 씁시다.
            */}
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