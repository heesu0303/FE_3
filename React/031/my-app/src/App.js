import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function A(){
  return <div>a</div>
}

function B(){
  return <div>b</div>
}

function Cpage(){
  const location = useLocation()
  const { num } = useParams()

  console.log(location)
  console.log(num)

  return <div>{num}번 게시물에 오신것을 환영합니다.</div>
}

function One() {
  const location = useLocation()
  const { num } = useParams()
  return <div>{num}번 페이지</div>
}
function Two() {
  const location = useLocation()
  const { num } = useParams()
  return <div>{num}번 페이지</div>
}
function Three() {
  const location = useLocation()
  const { num } = useParams()
  return <div>{num}번 페이지</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/a" element={<A />}/>
        <Route path="/b" element={<B />}/>
        <Route path="/c" element={<Cpage />}/>
        <Route path="/c/:num" element={<Outlet />}>
          <Route path="1" element={<One />}/>
          <Route path="2" element={<Two />}/>
          <Route path="d" element={<Three />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;