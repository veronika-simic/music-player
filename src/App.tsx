import { Route, Routes } from "react-router";
import {Discover} from "./pages";


function App() {
  return (<Routes>
    <Route path="/"  element={<Discover/>}/>
  </Routes>);
}

export default App;
