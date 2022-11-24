import Homepage from "./pages/Homepage/Homepage.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import Write from "./pages/Write/Write.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const currentUser = true;
    return (
        <Router>
            {/* react-router-dom 신 버전으로 하시는 분들은 Router -> BrowserRouter */}
            <TopBar />
            {/* react-router-dom 신 버전으로 하시는 분들은 Switch -> Routes */}
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/posts">
                    <Homepage />
                </Route>
                <Route path="/register">
                    <h1>hello world 3</h1>
                </Route>
                <Route path="/login">
                    <h1>hello world 4</h1>
                </Route>
                <Route path="/post/:id">
                    <h1>hello world 5</h1>
                </Route>
                <Route path="/write">
                    <Write />
                </Route>
                <Route path="/settings">
                    <h1>hello world 7</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
