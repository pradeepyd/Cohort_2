"use client"
import { Button } from "./ButtonComp";
import axios from "axios";
import { ChangeEventHandler,useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/app/actions/user";


export const SignComponent = () => {
    const [username ,setUsername] = useState("");
    const [password , setPassword] = useState("");
    const router = useRouter();

    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <a
        href="#"
        className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold text-center">Sign up</div>
          </div>
          <div className="pt-2">
            <LabelledInput onChange={(e) => {
                setUsername(e.target.value)
            }} label="Username" placeholder="pradeep@gmail.com" />
            <LabelledInput onChange={(e) => {
                setPassword(e.target.value)
            }}
              label="Password"
              placeholder="123abc"
              type={"password"}
            />
            <button
                onClick={async() => {
                  signup(username,password)
                //  await axios.post("http://localhost:3000/api/user",{
                //         username,
                //         password
                //     })
                    router.push("/");
                }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-meduim rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >Sign up</button>
  
          </div>
        </div>
      </a>
    </div>
  </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange:ChangeEventHandler<HTMLInputElement>;
  }
  
  function LabelledInput({ label, placeholder, type ,onChange}: LabelledInputType) {
    return (
      <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
  