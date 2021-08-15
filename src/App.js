import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import HomePage from './HomePage'


function App() {
  
  return (<>
  <Router >
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/p/:id" >
        <TextEditor />
      </Route>
    </Switch>
  </Router>
  </>);
}

export default App;
