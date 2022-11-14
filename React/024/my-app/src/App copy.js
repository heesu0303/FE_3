 function Resume({이름, 취미, 자기소개}) {
   let like = 0;

   function clickLike() {
     like += 1;
     console.log(like);
   }

   return (
     <section>
       <h2>{이름}</h2>
       <p>{취미}</p>
       <p>{자기소개}</p>
       <button onClick={clickLike}>{like}</button>
     </section>
   )
}

function App() {
  return (
    <main>
      <Resume 이름="장희수" 취미="운동" 자기소개="안녕하세요. 프론트엔드 개발자 장희수입니다!"/>
    </main>
  );
}

export default App;