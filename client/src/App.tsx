import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import DashBoard from "./pages/DashBoard";
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/signin" element={<Signin></Signin>}/>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}/>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;