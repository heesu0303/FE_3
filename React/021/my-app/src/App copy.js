import './app.css';
import {One} from './components/One'
import {Two} from './components/Two'

function App() {
  return (
    <div className="App">

      <div style={{backgroundColor:"black", color:"white"}}>hello world 1</div>
      {/* <div style={style}>hello world 2</div> */}
      {/* error */}
      {/* <div style="color:red;">hello world 3</div> */}

      <One/>
      <Two/>

      <h2 className="hi">test2</h2>
      <h2 className="hello">test2</h2>
    </div>
  );
}

export default App;