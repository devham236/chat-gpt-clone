import React, { useState } from "react"

const App = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true)

  const array = new Array(5).fill("item")

  return (
    <div className="w-[100vw] h-[100vh] bg-[#343541] flex">
      <section
        className={`side-bar ${
          sidebarOpened ? "w-[350px] p-2" : "w-0 p-0"
        } h-full bg-black relative text-white flex flex-col`}
      >
        <div
          className={`top-part ${
            sidebarOpened ? "p-3" : "hidden p-0"
          } flex items-center justify-between`}
        >
          <div className="flex items-center justify-center">
            <i className="fa-brands fa-react text-3xl mr-1"></i>
            <h1 className="ml-1 text-xl font-bold">New Chat</h1>
          </div>
          <div className="cursor-pointer opacity-50 hover:opacity-100 duration-300">
            <i className="fa-regular fa-square-plus text-3xl"></i>
          </div>
        </div>

        <ul
          className={`w-full max-h-full overflow-auto flex flex-col mt-4 ${
            sidebarOpened ? "" : "hidden"
          }`}
        >
          {array.map((item, index) => (
            <li
              key={index}
              className="w-full hover:bg-[#656570] duration-300 p-3 mb-1 last:mb-0 rounded-md cursor-pointer"
            >
              Test
            </li>
          ))}
        </ul>
        <div
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className="absolute right-[-20px] top-[50%] cursor-pointer"
        >
          <i
            className={`fa-solid fa-angle-${
              sidebarOpened ? "left" : "right"
            } text-lg text-[#ececf1] opacity-50 hover:opacity-100 duration-300`}
          ></i>
        </div>
      </section>

      <section className="chat-div w-full h-full p-3"></section>
    </div>
  )
}

export default App
