import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { User } from "./types";

function App() {
  const [first, setFirst] = useState<string>("typescript");
  const userList: User[] = useSelector((state: any) => state?.user?.userList);
  console.log("userList", userList);

  return (
    <>
      <h1>Vite + React + {first}</h1>
      {userList?.map((item) => {
        return <h5 key={item.id}>{item.name}</h5>;
      })}
    </>
  );
}

export default App;
