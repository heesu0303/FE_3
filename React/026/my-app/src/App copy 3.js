import styled from 'styled-components'

const ContentsH1 = styled.h1`
  color: salmon;
  border: ${({ border }) => border.join(" ")};
`

const ContentsDivOne = styled.div`
  color: red;
`

const ContentsDivTwo = styled.div`
  color: green;
  font-size: ${(props) => props.size + 'px'};
`

const ContentsDivThree = styled.div`
  background-color: ${(color) => color.background};
  color: ${(props) => props.option === '하나' ? 'hotpink' : 'red'};
`

function App() {
  return (
    <>
      <ContentsH1 border={['1px', 'solid', 'red']}>안녕하십니까!</ContentsH1>
      <ContentsDivOne>hello</ContentsDivOne>
      <ContentsDivTwo size={32}>world</ContentsDivTwo>
      <ContentsDivThree option={'하나'} background={'skyblue'}>heesu</ContentsDivThree>
    </>
  );
}

export default App;