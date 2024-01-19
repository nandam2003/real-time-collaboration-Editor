import socket from "../socket";
import { useEffect, useState } from "react";
const Home = () => {
  const [code, setCode] = useState();
  useEffect(() => {
    socket.on("codeChange", (data) => {
      setCode(data); // set the code to the value received from the server
    });

    return () => {
      // socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    socket.emit("codeChange", e.target.value); // emit the code to the server
    setCode(e.target.value);
  };

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join
      </button>
      <button className=" bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Create
      </button>
    </>
  );
};

export default Home;
