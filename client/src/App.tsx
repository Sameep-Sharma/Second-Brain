import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import DashBoard from "./pages/DashBoard";
import  SharedDashBoard  from "./pages/SharedDashBoard";
function App()
{ 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/signin" element={<Signin></Signin>}/>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}/>
        <Route path="/share/:shareLink" element={<SharedDashBoard></SharedDashBoard>}/>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;