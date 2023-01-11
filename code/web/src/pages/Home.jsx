import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Home() {
  const [lastMessage, setLastMessage] = useState("No data received yet");

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("connect", () => {
      console.log("Connected to server");
      socket.on("message", (data) => {
        setLastMessage(data);
      });
    });
  });

  const data = { name: "nish", github: "n2shh" };
  return (
    <>
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <h1 className="text-[#E6E6E8] text-[4rem] font-black">Hello!</h1>
        <h3 className="text-[#A2A2A7] text-[1.2rem]">
          Scan the next QR with the mobile app created with Expo
        </h3>
        <img
          src={`http://localhost:8000/?data=${JSON.stringify(data)}`}
          alt="QR Code"
          className="w-[200px] h-[200px] mt-4 rounded-xl"
        />
        <span className="mt-4 text-[#A2A2A7] text-[1rem]">
          Last data received: {lastMessage}
        </span>
      </div>
    </>
  );
}

export default Home;
