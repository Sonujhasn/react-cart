import "./styles/app.scss"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/Home";
import {Toaster} from "react-hot-toast"
import Card from "./component/Card";
function App() {
  return (
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Card/>}/>
        </Routes>
        <Toaster/>
     </BrowserRouter>
  );
}
export default App;
