'use client'

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiArrowCircleRightFill } from "react-icons/pi";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "안녕하세요! 오늘은 뭐할까요?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    // Simulate bot reply (replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: `알겠습니다. "${input}"에 대해 더 알려주세요.` }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-white to-primary">
      {/* Top Bar */}
      <div className="p-4 text-lg font-semibold flex justify-end">
        <RxHamburgerMenu color="black" size={30}/>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg inline-block text-white break-words break-all max-w-[80%] ${
                msg.from === "user"
                  ? "bg-blue-400 text-start"
                  : "bg-gray-500 text-start"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex p-4 bg-white border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="메시지를 입력하세요..."
          className="flex-1 border rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleSend}
          className="text-primary hover:text-white"
        >
          {/* 전송 */}
          <PiArrowCircleRightFill size={40} />
        </button>
      </div>
    </div>
  );
}