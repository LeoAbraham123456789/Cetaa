import {Home} from "./Pages/Home/Home";
import {Fund} from "./Pages/Fund/Fund";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}
        />
      </Routes>
      <Routes>
      <Route
          exact
          path="/second_page"
          element={<Fund/>}
        />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
