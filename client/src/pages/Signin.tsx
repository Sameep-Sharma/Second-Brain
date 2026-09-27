import Input from "../components/Input";
import { Button } from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate  = useNavigate()
  async function signin()
  {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
        username,
        password
    })
    alert("you have signed in");
    localStorage.setItem("token", response.data.token)
    //redirect the user to dashboard
    navigate("/dashboard")
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password"></Input>
        <div className="flex justify-center pt-4">
          <Button onClick={signin} variant="primary" text="Signin" submit="yes" animation="glaze" fullWidth={true} loading={false}></Button>
        </div>
      </div>
    </div>
  );
}
