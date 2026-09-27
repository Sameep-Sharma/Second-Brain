import Input from "../components/Input";
import { Button } from "../components/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  async function signup()
  {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log("BACKEND_URL:", BACKEND_URL);
  console.log(
    "Request URL:",
    `${BACKEND_URL}/api/v1/signup`
  );

    await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password
    })
    alert("you have signed up")
    navigate("/signin")
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password"></Input>
        <div className="flex justify-center pt-4">
          <Button size="md" onClick={signup} variant="primary" text="Signup" submit="yes" animation="glaze" fullWidth={true} loading={false}></Button>
        </div>
      </div>
    </div>
  );
}
