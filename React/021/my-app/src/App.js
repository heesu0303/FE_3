function One(props) {
  return (
    <div>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age}살 입니다.</p>
    </div>
  )
}

function Two({name, age}) {
  return (
    <div>
        <p>{name}님 안녕하세요!</p>
        <p>당신의 나이는 {age}살 입니다.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <p>hello world1</p>
      <p>hello world2</p>
      <One name="희수" age={28} />
      <Two name="희수" age={28} />
    </>
  );
}

export default App;