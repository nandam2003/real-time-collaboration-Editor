import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="border-solid">
        <form className=" flex flex-col place-items-center" action="post">
          <input
            className=" border placeholder:text-gray-400"
            type="text"
            placeholder="username"
          />
          <input
            className=" border placeholder:text-gray-400"
            type="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <Link to="/register">Don't have an account? create one</Link>
    </>
  );
};

export default LoginPage;
