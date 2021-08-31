import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    // react-router-dom를 이용하여 손쉽게 route를 조정할 수 있다.
    <Router>
      <Switch>
        <Route path="/" exact> 
          <Main></Main>    
        </Route>
      </Switch>
    </Router>
  )
}



export default App;
