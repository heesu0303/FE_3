// 리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링한다
// -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
// -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다

function One(props) {
  console.log('one시작');
  return (
    <div>
      {props.children}
    </div>
  )
}

function Two(props) {
  console.log('two시작');
  return (
    <div>
      {props.children}
    </div>
  )
}

function Three(props) {
  console.log('three시작');
  return (
    <div>
      {props.children}
    </div>
  )
}

function Four(props) {
  console.log('four시작');
  return (
    <div>
      four
    </div>
  )
}

function Five() {
  return (
    <div>
      five
      <Six/>
    </div>
  )
}

function Six() {
  return (
    <div>
      six
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h1>app &gt; One - h1</h1>
        <p>app &gt; One - p</p>
        <Two>
          <h2>app &gt; One &gt; Two - h1</h2>
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three>
          <h3>app &gt; One &gt; Two &gt; Three - h1</h3>
          <p>app &gt; One &gt; Two &gt; Three - p</p>
        </Three>
        <Four></Four>
        <Five></Five>
      </One>
    </div>
  );
}
export default App;
