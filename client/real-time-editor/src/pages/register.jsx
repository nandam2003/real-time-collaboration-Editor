import { useState } from "react";
import { RegisterUser } from "../functions/user_functions";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" flex flex-col flex-wrap">
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className=" border placeholder:text-gray-400"
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className=" border placeholder:text-gray-400"
        type="email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className=" border placeholder:text-gray-400"
        type="password"
        placeholder="password"
      />
      <button
        type="submit"
        onClick={() => {
          RegisterUser({ username, email, password });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default RegisterPage;
