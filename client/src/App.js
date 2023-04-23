import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Root from "./components/Root.js";
import Home from "./components/Home";
import Register from "./components/Register.js";
import Edit from "./components/Edit.js";
import Details from "./components/Details.js";
import {Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<Root/>}>
    <Route index element = {<Home/>}/>
    <Route path = "/register" element = {<Register/>}/>
    <Route path = "/edit/:id" element = {<Edit/>}/>
    <Route path = "/view/:id" element = {<Details/>}/> 
  </Route>
))

function App() {
  return (
    <>
    
    <RouterProvider router = {router} />
  
    </> 
  );
}

export default App;
