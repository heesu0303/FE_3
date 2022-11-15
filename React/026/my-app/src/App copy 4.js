import styled, { css } from 'styled-components'

const ContentsDivOne = css`
  color: red;
  &::after {
    content: 'cm'
  }
`

const ContentsDivTwo = css`
  font-size: 32px
`

const ContentsDivThree = styled.div`
  ${ContentsDivOne}
  ${ContentsDivTwo}
`

function App() {
  return (
    <>
      <ContentsDivThree>10</ContentsDivThree>
    </>
  );
}

export default App;