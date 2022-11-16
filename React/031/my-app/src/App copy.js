// npx create-react-app my-app --template basic-react
// cd my-app
// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  return <h1>{props.name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name="heesu"/>}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
