import styled from 'styled-components'

// div로 덕지덕지 구성되어 있는 이유
// 1. 보안 : 태그나 클래스명으로 데이터를 가져갈 수 있다.
// 2. 

const ContnetsDivOne = styled.div`
  color: red;
`

const ContnetsDivTwo = styled.div`
  color: green;
`

const ContnetsDivThree = styled.div`
  color: blue;
`

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`

function App() {
  return (
    <>
      <SectionTitle>hello</SectionTitle>
      <ContnetsDivOne>hello world</ContnetsDivOne>
      <ContnetsDivTwo>hello world</ContnetsDivTwo>
      <ContnetsDivThree>hello world</ContnetsDivThree>
    </>
  );
}

export default App;